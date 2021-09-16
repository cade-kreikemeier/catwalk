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

// {
//   "product_id": 44392,
//   "rating": 5,
//   "summary": "testsummary",
//   "body": "workkkkk!",
//   "recommend": true,
//   "name": "Cade",
//   "email": "louissssss@louis.com",
//   "photos": [],
  // "characteristics": {
  //     "148903": 4,
  //     "148904": 4,
  //     "148905": 4,
  //     "148906": 4
  // }
// }


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