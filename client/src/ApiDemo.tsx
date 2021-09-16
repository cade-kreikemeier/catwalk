/* eslint @typescript-eslint/no-unused-vars: 0 */
import React, { useEffect, useState } from 'react';
import { productData } from './models/productData.interface';
import { styleData } from './models/styleData.interface';
import { reviews } from './models/reviews.interface';
import { apiRequest } from './utils/apiRequests';
import { reviewMetadata } from './models/reviewMetadata.interface';

const ApiDemo: React.FC = () => {
  const [products, setProducts] = useState<productData[]>([]);
  const [product, setProduct] = useState<productData>(null);
  const [styles, setStyles] = useState<styleData[]>();
  const [relatedIds, setRelatedIds] = useState<number[]>();
  const [reviews, setReviews] = useState<reviews>();
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

  useEffect(() => {
    apiRequest.getReviewMetadata(44392)
      .then(data => setMetadata(data))
      .catch(err => console.error(err));
  }, []);

  return (<h2>IM A DEMO!!!</h2>);
};

export default ApiDemo;
