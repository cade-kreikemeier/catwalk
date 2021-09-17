import React, { useContext, useEffect } from 'react';
import ProductReview from './ProductReview.jsx';
import Contexts from '../../../contexts/Contexts.tsx';


export default function ReviewStar() {
  const currentReviewsMetadata = useContext(Contexts.ReviewsMetadataContext);

  function calAvgRating(MetadataRating) {
    let total = 0;
    let number = 0;
    for (let i = 0; i < 5; i++) {
      if (MetadataRating[i + 1] !== undefined) {
        total = total + (i + 1) * (MetadataRating[i + 1]);
        number = number + (parseInt(MetadataRating[i + 1]));
      }
    };
    console.log('total', total);
    console.log('number', number);
    return total / number;
  };
  let rating;
  if (currentReviewsMetadata !== null) {
    rating = calAvgRating(currentReviewsMetadata.ratings) / 5 * 100;
    console.log(currentReviewsMetadata.ratings);
    console.log(rating);
  }

  return (
    <div className='reviewStar'>
      <div className='starsContainer'>
        <span className='starOutline'>★★★★★</span>
        <span className='starFilled' style={{ width: `${rating}%` }}>★★★★★</span>
      </div>
      <ProductReview />
    </div>
  );
};