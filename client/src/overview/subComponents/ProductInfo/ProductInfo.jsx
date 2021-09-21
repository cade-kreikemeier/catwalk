import React, { useContext } from 'react';
import ReviewStar from '../../../utils/ReviewStar.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';
import Contexts from '../../../contexts/Contexts.tsx';
import ProductReview from './ProductReview.jsx';

export default function ProductInfo() {
  const currentReviewsMetadata = useContext(Contexts.ReviewsMetadataContext);
  let reviewCount = false;
  if (currentReviewsMetadata) {
    if (Object.keys(currentReviewsMetadata).length !== 0 && currentReviewsMetadata.constructor === Object) {
      reviewCount = true;
    }
  }
  return (
    <div className='productInfo'>
      <div className={'starReviewRow'} style={{ visibility: reviewCount ? 'visible' : 'hidden' }}>
        <ReviewStar currentReviewsMetadata={currentReviewsMetadata}/>
        <ProductReview />
      </div>
      <ProductCategory />
      <ProductName />
      <ProductPrice />
    </div>
  );
};