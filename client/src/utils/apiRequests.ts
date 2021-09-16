import axios, { AxiosResponse } from 'axios';
import { productData } from '../models/productData.interface';
import { reviewData } from '../models/reviewData.interface';
import { reviewMetadata } from '../models/reviewMetadata.interface';
import { styleData } from '../models/styleData.interface';


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
  getAllProducts: (): Promise<productData[]> => requests.get('/products/'),
  getProductById: (productId: number): Promise<productData> => {
    return requests.get(`/products/${productId}`);
  },
  getProductStyles: (productId: number): Promise<styleData[]> => {
    return requests.get(`/products/${productId}/styles`);
  },
  getRelatedProducts: (productId: number): Promise<number[]> => {
    return requests.get(`/products/${productId}/related`);
  },
  getReviewsForProduct: (productId: number, page = 1, count = 5, sort = 'newest'): Promise<reviewData> => {
    return requests.get('/reviews/', { params: { product_id: productId, page: page, count: count, sort: sort } });
  },
  getReviewMetadata: (productId: number): Promise<reviewMetadata> =>
    requests.get('/reviews/meta', { params: { product_id: productId } }),
  postReview: (productId: number, rating: number, summary: string, body: string,
    recommend: boolean, name: string, email: string, photos:string[], characteristics: unknown): Promise<string> => requests.post('/reviews/',
    { product_id: productId, rating, summary, body, recommend, name, email, photos, characteristics }),
  updateReview: (reviewId: number): Promise<string> => requests.put(`/reviews/${reviewId}/helpful`),
  reportReview: (reviewId: number): Promise<string> => requests.put(`/reviews/${reviewId}/report`)
};