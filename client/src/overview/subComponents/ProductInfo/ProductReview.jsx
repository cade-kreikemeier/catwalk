import React, { useContext } from 'react';
import Contexts from '../../../contexts/Contexts.tsx';

export default function ProductReview() {
  const currentProductReview = useContext(Contexts.ReviewsContext);
  let reviewCount = false;
  if (currentProductReview !== null) {
    console.log('review count', currentProductReview.results.length);
    if (currentProductReview.results.length > 0) {
      reviewCount = true;
    }
  }
  return (
    <div className='productReview' style={{ visibility: reviewCount ? 'visible' : 'hidden' }}>
      Read all review
    </div>
  );
}