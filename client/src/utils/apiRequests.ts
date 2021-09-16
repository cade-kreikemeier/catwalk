import axios, { AxiosResponse } from 'axios';
import { product } from '../models/product.interface';
import { reviews } from '../models/reviews.interface';
import { reviewMeta } from '../models/reviewMeta.interface';
import { style } from '../models/style.interface';


const apiServer = axios.create({
  baseURL: 'http://localhost:9001/api',
  timeout: 10000
});

const responseBody = (response: AxiosResponse) => response.data;

// ---Requests---

const requests = {
  get: (url: string, params?: unknown) => apiServer.get(url, params).then(responseBody),
  post: (url: string, body: unknown) => apiServer.post(url, body).then(responseBody),
  put: (url: string, body?: unknown) => apiServer.put(url, body).then(responseBody)
};

export const apiRequest = {
  getAllProducts: (): Promise<product[]> => requests.get('/products'),
  getProductById: (productId: number): Promise<product> => {
    return requests.get(`/products/${productId}`);
  },
  getProductStyles: (productId: number): Promise<style[]> => {
    return requests.get(`/products/${productId}/styles`);
  },
  getRelatedProducts: (productId: number): Promise<number[]> => {
    return requests.get(`/products/${productId}/related`);
  },
  getReviewsForProduct: (productId: number, page = 1, count = 5, sort = 'newest'): Promise<reviews> => {
    return requests.get('/reviews/', { params: { product_id: productId, page: page, count: count, sort: sort } });
  },
  getReviewMetadata: (productId: number): Promise<reviewMeta> =>
    requests.get('/reviews/meta', { params: { product_id: productId } }),
  postReview: (productId: number, rating: number, summary: string, body: string,
    recommend: boolean, name: string, email: string, photos: string[], characteristics: unknown):
    Promise<string> => requests.post('/reviews/', {
    product_id: productId,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics
  }),
  updateReview: (reviewId: number): Promise<string> => requests.put(`/reviews/${reviewId}/helpful`),
  reportReview: (reviewId: number): Promise<string> => requests.put(`/reviews/${reviewId}/report`)
};