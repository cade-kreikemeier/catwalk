import React, { useContext } from 'react';
import ReviewStar from './ReviewStar.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';
import Contexts from '../../../contexts/Contexts.tsx';
import ProductReview from './ProductReview.jsx';

export default function ProductInfo() {
  const currentReviewsMetadata = useContext(Contexts.ReviewsMetadataContext);
  return (
    <div className='productInfo'>
      <div className={'starReviewRow'}>
        <ReviewStar currentReviewsMetadata={currentReviewsMetadata}/>
        <ProductReview />
      </div>
      <ProductCategory />
      <ProductName />
      <ProductPrice />
    </div>
  );
};