import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { apiRequest } from '../utils/apiRequests';
import Contexts from './Contexts';

type Props = {
  children: ReactNode;
};

export function ProductsProvider({ children }: Props): ReactElement {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiRequest.getAllProducts()
      .then(setProducts)
      .catch(err => console.error(err));
  }, []);

  return (
    <Contexts.ProductsContext.Provider value={products}>
      {children}
    </Contexts.ProductsContext.Provider>
  );
}

export function ProductProvider({ children }: Props): ReactElement {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    apiRequest.getProductById(44389)
      .then(setProduct)
      .catch(err => console.error(err));
  }, []);

  return (
    <Contexts.ProductContext.Provider value={product}>
      {children}
    </Contexts.ProductContext.Provider>
  );
}

export function ProductSytlesProvider({ children }: Props): ReactElement {
  const [productSytles, setProductSytles] = useState(null);

  useEffect(() => {
    apiRequest.getProductStyles(44389)
      .then(setProductSytles)
      .catch(err => console.error(err));
  }, []);

  return (
    <Contexts.ProductStyleContext.Provider value={productSytles}>
      {children}
    </Contexts.ProductStyleContext.Provider>
  );
}

export function RelatedProductsProvider({ children }: Props): ReactElement {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    apiRequest.getRelatedProducts(44389)
      .then(setRelatedProducts)
      .catch(err => console.error(err));
  }, []);

  return (
    <Contexts.RelatedProducts.Provider value={relatedProducts}>
      {children}
    </Contexts.RelatedProducts.Provider>
  );
}

export function ReviewsProvider({ children }: Props): ReactElement {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    apiRequest.getReviewsForProduct(44389)
      .then(setReviews)
      .catch(err => console.error(err));
  }, []);

  return (
    <Contexts.ReviewsContext.Provider value={reviews}>
      {children}
    </Contexts.ReviewsContext.Provider>
  );
}

export function ReviewMetadataProvider({ children }: Props): ReactElement {
  const [reviewMetadata, setReviewMetadata] = useState(null);

  useEffect(() => {
    apiRequest.getReviewMetadata(44389)
      .then(setReviewMetadata)
      .catch(err => console.error(err));
  }, []);

  return (
    <Contexts.ReviewsContext.Provider value={reviewMetadata}>
      {children}
    </Contexts.ReviewsContext.Provider>
  );
}