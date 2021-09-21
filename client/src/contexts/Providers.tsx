import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { apiRequest } from '../utils/apiRequests';
import Contexts from './Contexts';
import { product } from '../models/product.interface';
import { style } from '../models/style.interface';
import { reviews } from '../models/reviews.interface';
import { reviewsMetaData } from '../models/reviewsMetaData.interface';

type Props = {
  children: ReactNode;
};

const productId = 44388;

export function ProductsProvider({ children }: Props): ReactElement {
  const [products, setProducts] = useState<product[]>([]);

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
  const [product, setProduct] = useState<product | undefined>(undefined);

  useEffect(() => {
    apiRequest.getProductById(productId)
      .then(setProduct)
      .catch(err => console.error(err));
  }, [productId]);

  return (
    <Contexts.ProductContext.Provider value={product}>
      {children}
    </Contexts.ProductContext.Provider>
  );
}

export function ProductSytlesProvider({ children }: Props): ReactElement {
  const [productSytles, setProductSytles] = useState<style | undefined>(undefined);

  useEffect(() => {
    apiRequest.getProductStyles(productId)
      .then(setProductSytles)
      .catch(err => console.error(err));
  }, [productId]);

  return (
    <Contexts.ProductStyleContext.Provider value={productSytles}>
      {children}
    </Contexts.ProductStyleContext.Provider>
  );
}

export function RelatedProductsProvider({ children }: Props): ReactElement {
  const [relatedProducts, setRelatedProducts] = useState<number[]>([]);

  useEffect(() => {
    apiRequest.getRelatedProducts(productId)
      .then(setRelatedProducts)
      .catch(err => console.error(err));
  }, [productId]);

  return (
    <Contexts.RelatedProducts.Provider value={relatedProducts}>
      {children}
    </Contexts.RelatedProducts.Provider>
  );
}

export function ReviewsProvider({ children }: Props): ReactElement {
  const [reviews, setReviews] = useState<reviews | undefined>(undefined);

  useEffect((): void => {
    apiRequest.getReviewsForProduct(productId)
      .then(setReviews)
      .catch(err => console.error(err));
  }, [productId]);


  return (
    <Contexts.ReviewsContext.Provider value={{ reviews, setReviews }}>
      {children}
    </Contexts.ReviewsContext.Provider>
  );
}

export function ReviewsMetadataProvider({ children }: Props): ReactElement {
  const [reviewsMetadata, setReviewsMetadata] = useState<reviewsMetaData | undefined>(undefined);

  useEffect(() => {
    apiRequest.getReviewsMetadata(productId)
      .then(setReviewsMetadata)
      .catch(err => console.error(err));
  }, [productId]);

  return (
    <Contexts.ReviewsMetadataContext.Provider value={reviewsMetadata}>
      {children}
    </Contexts.ReviewsMetadataContext.Provider>
  );
}