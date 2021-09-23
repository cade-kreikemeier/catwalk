import React, { ReactElement, ReactNode, useContext, useEffect, useState } from 'react';
import { apiRequest } from '../utils/apiRequests';
import Contexts from './Contexts';
import { product } from '../models/product.interface';
import { style } from '../models/style.interface';
import { reviews } from '../models/reviews.interface';
import { reviewsMetaData } from '../models/reviewsMetaData.interface';

type Props = {
  children: ReactNode;
};


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
  const productId = useContext(Contexts.ProductIdContext);

  useEffect(() => {
    if (productId) {
      apiRequest.getProductById(productId)
        .then(setProduct)
        .catch(err => console.error(err));
    }
  }, [productId]);

  return (
    <Contexts.ProductContext.Provider value={product}>
      {children}
    </Contexts.ProductContext.Provider>
  );
}

export function ProductSytlesProvider({ children }: Props): ReactElement {
  const [productSytles, setProductSytles] = useState<style | undefined>(undefined);
  const productId = useContext(Contexts.ProductIdContext);

  useEffect(() => {
    if (productId) {
      apiRequest.getProductStyles(productId)
        .then(setProductSytles)
        .catch(err => console.error(err));
    }
  }, [productId]);

  return (
    <Contexts.ProductStyleContext.Provider value={productSytles}>
      {children}
    </Contexts.ProductStyleContext.Provider>
  );
}

export function RelatedProductsProvider({ children }: Props): ReactElement {
  const [relatedProducts, setRelatedProducts] = useState<number[]>([]);
  const productId = useContext(Contexts.ProductIdContext);

  useEffect(() => {
    if (productId) {
      apiRequest.getRelatedProducts(productId)
        .then(setRelatedProducts)
        .catch(err => console.error(err));
    }
  }, [productId]);

  return (
    <Contexts.RelatedProducts.Provider value={relatedProducts}>
      {children}
    </Contexts.RelatedProducts.Provider>
  );
}

export function ReviewsProvider({ children }: Props): ReactElement {
  const [reviews, setReviews] = useState<reviews | undefined>(undefined);
  const [sortType, setSortType] = useState('relevant');
  const productId = useContext(Contexts.ProductIdContext);

  const requestReviews = () => {
    if (productId) {
      apiRequest.getReviewsForProduct(productId, sortType)
        .then(setReviews)
        .catch(err => console.error(err));
    }
  };

  useEffect(() => {
    requestReviews();
  }, [productId, sortType]);


  return (
    <Contexts.ReviewsContext.Provider value={{ reviews, setSortType }}>
      {children}
    </Contexts.ReviewsContext.Provider>
  );
}

export function ReviewsMetadataProvider({ children }: Props): ReactElement {
  const [reviewsMetadata, setReviewsMetadata] = useState<reviewsMetaData | undefined>(undefined);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const productId = useContext(Contexts.ProductIdContext);

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
    if (productId) {
      apiRequest.getReviewsMetadata(productId)
        .then(setReviewsMetadata)
        .catch(err => console.error(err));
    }
  }, [productId]);

  useEffect(() => {
    setReviewCount(calcReviewCount);
  }, [reviewsMetadata]);

  return (
    <Contexts.ReviewsMetadataContext.Provider value={{ reviewsMetadata, reviewCount }}>
      {children}
    </Contexts.ReviewsMetadataContext.Provider>
  );
}