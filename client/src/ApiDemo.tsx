import React, { useEffect, useState } from 'react';
import { productData } from './models/productData.interface';
import { styleData } from './models/styleData.interface';
import { reviewData } from './models/reviewData.interface';
import { apiRequest } from './utils/apiRequests';
import { reviewMetadata } from './models/reviewMetadata.interface';

const ApiDemo: React.FC = () => {
  const [products, setProducts] = useState<productData[]>([]);
  const [product, setProduct] = useState<productData>(null);
  const [styles, setStyles] = useState<styleData[]>();
  const [relatedIds, setRelatedIds] = useState<number[]>();
  const [reviews, setReviews] = useState<reviewData>();
  const [metaData, setMetadata] = useState<reviewMetadata>();

  useEffect(() => {
    apiRequest.getAllProducts()
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    apiRequest.getProductById(44388)
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    apiRequest.getProductStyles(44388)
      .then(data => setStyles(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    apiRequest.getRelatedProducts(44388)
      .then(data => setRelatedIds(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    apiRequest.getReviewsForProduct(44392, 1, 5, 'newest')
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  // useEffect(() => {
  //   apiRequest.postReview(44392, 5, 'api test summary', 'api test body', false, 'Tom cruise', 'louis@gmail.com', [], {
  //     '148903': 4,
  //     '148904': 4,
  //     '148905': 4,
  //     '148906': 4
  //   })
  //     .then(() => {
  //       return apiRequest.getReviewsForProduct(44392, 1, 20, 'newest');
  //     })
  //     .then(data => setReviews(data))
  //     .catch(err => console.error(err));
  // }, []);

  useEffect(() => {
    apiRequest.getReviewMetadata(44392)
      .then(data => setMetadata(data))
      .catch(err => console.error(err));
  }, []);

  // useEffect(() => {
  //   apiRequest.updateReview(840868)
  //     .then(() => {
  //       return apiRequest.getReviewsForProduct(44392, 1, 20, 'newest');
  //     })
  //     .then(data => setReviews(data))
  //     .catch(err => console.error(err));
  // }, []);

  // useEffect(() => {
  //   apiRequest.reportReview(840871)
  //     .then(() => {
  //       return apiRequest.getReviewsForProduct(44392, 1, 20, 'newest');
  //     })
  //     .then(data => setReviews(data))
  //     .catch(err => console.error(err));
  // }, []);

  // {
  // "review_id": 840870,
  // "rating": 5,
  // "summary": "api test summary",
  // "recommend": false,
  // "response": null,
  // "body": "api test body",
  // "date": "2021-09-15T00:00:00.000Z",
  // "reviewer_name": "Tom cruise",
  // "helpfulness": 0,
  // "photos": []
  // }

return <React.Fragment>
  <h2>IM A DEMO!!!</h2>
</React.Fragment>;
};

export default ApiDemo;
