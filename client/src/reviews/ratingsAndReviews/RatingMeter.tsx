import React, { useContext } from 'react';
import { ReviewsMetadataContext } from '../../contexts/Contexts';

interface Props {
  rating: number
}

export default function AttributeSlider({ rating }: Props): JSX.Element {
  const { reviewsMetadata, reviewCount } = useContext(ReviewsMetadataContext) || {};

  if (reviewsMetadata && reviewCount) {
    return (
      <div key={rating} className="ratingMeter">
        <label htmlFor={`${rating}star`}>{rating} Stars </label>
        <meter id={`${rating}star`}
          value={parseInt(reviewsMetadata?.ratings[rating]) / reviewCount || 0}
        >{rating} Star Ratings</meter>
      </div>
    );
  } else {
    return <></>;
  }
}