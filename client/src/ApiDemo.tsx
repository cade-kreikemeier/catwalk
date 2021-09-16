/* eslint @typescript-eslint/no-unused-vars: 0 */
import React, { useEffect, useState } from 'react';
import { product } from './models/product.interface';
import { style } from './models/style.interface';
import { reviews } from './models/reviews.interface';
import { apiRequest } from './utils/apiRequests';
import { reviewMetaData } from './models/reviewMetaData.interface';

const ApiDemo: React.FC = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [product, setProduct] = useState<product>(null);
  const [styles, setStyles] = useState<style[]>();
  const [relatedIds, setRelatedIds] = useState<number[]>();
  const [reviews, setReviews] = useState<reviews>();
  const [metaData, setMetadata] = useState<reviewMetaData>();

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

  return <React.Fragment>
    <h2>IM A DEMO!!!</h2>
  </React.Fragment>;
};

export default ApiDemo;
