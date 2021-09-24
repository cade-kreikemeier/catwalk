import React, { useContext } from 'react';
import ReviewStar from '../../../utils/ReviewStar.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';
import { ReviewsMetadataContext } from '../../../contexts/Contexts.tsx';
import ProductReview from './ProductReview.jsx';
import calcAvgRating from '../../../utils/calAvgRating';

export default function ProductInfo() {
  const { reviewsMetadata } = useContext(ReviewsMetadataContext);
  let reviewShow = false;
  if (reviewsMetadata) {
    if (Object.keys(reviewsMetadata.ratings).length !== 0 && reviewsMetadata.constructor === Object) {
      reviewShow = true;
    }
  }
  return (
    <div className='productInfo'>
      {reviewShow
        ? <div className={'starReviewRow'}>
          <ReviewStar rating={calcAvgRating(reviewsMetadata.ratings)} />
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