import axios, { AxiosResponse } from 'axios';
import { API_TOKEN, API_URL } from '../../../apiConfig/config';
import { productData } from '../models/productData.interface';
import { reviewData } from '../models/reviewData.interface';
import { styleData } from '../models/styleData.interface';


const apiServer = axios.create({
  baseURL: API_URL,
  headers: { Authorization: API_TOKEN },
  timeout: 10000
});

const responseBody = (response: AxiosResponse) => response.data;

// ---Requests---

const requests = {
  get: (url: string, params?: unknown) => apiServer.get(url, params).then(responseBody),
  post: (url: string, body: unknown) => apiServer.post(url, body).then(responseBody),
  put: (url: string, body: unknown) => apiServer.put(url, body).then(responseBody)
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
  getReviewsForProduct: (productId: number, page = 1, count = 5, sort = 'newest'): Promise<reviewData[]> => {
    return requests.get('/reviews/', { product_id: productId, page: page, count: count, sort: sort });
  }
};


// const retrieveProducts = (): Promise<productData[]> => {
//   return apiServer.get('/products')
//     .then(({ data }) => data)
//     .catch(err => console.error(err));
// };

// // function retrieveProducts(callback): void {
// //   axios.get(`${API_URL}/products`, )
// //     .then(({ data }) => callback(data))
// //     .catch(err => console.log(err));
// // };

// function retrieveProductByID(productId: number): void {
//   axios.get(`${API_URL}/products/${productId}`, { headers: { Authorization: API_TOKEN } })
//     .then(({ data }) => data)
//     .catch(err => console.log(err));
// };

// function retrieveProductStyles(productId: number): void {
//   axios.get(`${API_URL}/products/${productId}/styles`, { headers: { Authorization: API_TOKEN } })
//     .then(({ data }) => data)
//     .catch(err => console.log(err));
// };

// function retrieveRelatedProducts(productId: number): void {
//   axios.get(`${API_URL}/products/${productId}/related`, { headers: { Authorization: API_TOKEN } })
//     .then(({ data }) => data)
//     .catch(err => console.log(err));
// };


// // ---Review Requests---


// function retrieveReviews(productId: number, page = 1, count = 5, sort = 'newest', callback): void {
//   axios.get(`${API_URL}/reviews/`, {
//     headers: { Authorization: API_TOKEN },
//     params: { product_id: productId, page: page, count: count, sort: sort }
//   })
//     .then(res => callback(res))
//     .catch(err => callback(err));
// };

// export {
//   retrieveProducts,
//   retrieveProductByID,
//   retrieveProductStyles,
//   retrieveRelatedProducts,
//   retrieveReviews
// };


// {
// "id": 44392,
// "campus": "hr-den",
// "name": "Heir Force Ones",
// "slogan": "A sneaker dynasty",
// "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
// "category": "Kicks",
// "default_price": "99.00",
// "created_at": "2021-08-13T14:40:29.181Z",
// "updated_at": "2021-08-13T14:40:29.181Z"
// }