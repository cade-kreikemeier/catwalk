import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { apiRequest } from '../utils/apiRequests';
import { product } from '../models/product.interface';
import { style } from '../models/style.interface';
import { reviews } from '../models/reviews.interface';
import { reviewsMetaData } from '../models/reviewsMetaData.interface';
import {
  ProductContext,
  ProductsContext,
  ProductStyleContext,
  RelatedProducts,
  ReviewsContext,
  ReviewsMetadataContext
} from './Contexts';

type Props = {
  children: ReactNode;
};

const productId = 44391;

export function ProductsProvider({ children }: Props): ReactElement {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    apiRequest.getAllProducts()
      .then(setProducts)
      .catch(err => console.error(err));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
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
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
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
    <ProductStyleContext.Provider value={productSytles}>
      {children}
    </ProductStyleContext.Provider>
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
    <RelatedProducts.Provider value={relatedProducts}>
      {children}
    </RelatedProducts.Provider>
  );
}

export function ReviewsProvider({ children }: Props): ReactElement {
  const [reviews, setReviews] = useState<reviews | undefined>(undefined);
  const [sortType, setSortType] = useState('relevant');

  const requestReviews = () => {
    apiRequest.getReviewsForProduct(productId, sortType)
      .then(setReviews)
      .catch(err => console.error(err));
  };

  useEffect(() => {
    requestReviews();
  }, [productId, sortType]);


  return (
    <ReviewsContext.Provider value={{ reviews, setSortType }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export function ReviewsMetadataProvider({ children }: Props): ReactElement {
  const [reviewsMetadata, setReviewsMetadata] = useState<reviewsMetaData | undefined>(undefined);
  const [reviewCount, setReviewCount] = useState<number>(0);

  const calcReviewCount = () => {
    if (reviewsMetadata) {
      return Object.values(reviewsMetadata.ratings).reduce((totalNumRatings, starRatingNum) => {
        totalNumRatings += parseInt(starRatingNum);
        return totalNumRatings;
      }, 0);
    } else {
      return 0;
    }
  };

  useEffect(() => {
    apiRequest.getReviewsMetadata(productId)
      .then(setReviewsMetadata)
      .catch(err => console.error(err));
  }, [productId]);

  useEffect(() => {
    setReviewCount(calcReviewCount);
  }, [reviewsMetadata]);

  return (
    <ReviewsMetadataContext.Provider value={{ reviewsMetadata, reviewCount }}>
      {children}
    </ReviewsMetadataContext.Provider>
  );
}