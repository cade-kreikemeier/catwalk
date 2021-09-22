import React, { useContext } from 'react';
import ReviewStar from '../../../utils/ReviewStar.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';
import Contexts from '../../../contexts/Contexts.tsx';
import ProductReview from './ProductReview.jsx';

export default function ProductInfo() {
  const { reviewsMetadata } = useContext(Contexts.ReviewsMetadataContext);
  let reviewShow = false;
  if (reviewsMetadata) {
    if (Object.keys(reviewsMetadata).length !== 0 && reviewsMetadata.constructor === Object) {
      reviewShow = true;
    }
  }
  return (
    <div className='productInfo'>
      {reviewShow
        ? <div className={'starReviewRow'}>
          <ReviewStar currentReviewsMetadata={reviewsMetadata} />
          <ProductReview />
        </div>
        : null
      }
      <ProductCategory />
      <ProductName />
      <ProductPrice />
    </div>
  );
};