import React, { useContext } from 'react';
import { ReviewsMetadataContext } from '../../contexts/Contexts';

const RatingBreakdown: React.FC = () => {
  const { reviewsMetadata, reviewCount } = useContext(ReviewsMetadataContext) || {};

  const ratingMeters = [];


  if (reviewCount && reviewsMetadata?.ratings) {
    for (let i = 5; i > 0; i--) {
      ratingMeters.push(<div>
        <label htmlFor={`${i}star`}>{i} Stars </label>
        <meter id={`${i}star`}
          value={parseInt(reviewsMetadata?.ratings[i]) / reviewCount || 0}
        >{i} Star Ratings</meter>
      </div>);
    }
  }

  return (
    <div className="ratingBreakdown">
      <h4>Rating Breakdown</h4>
      {ratingMeters}
    </div>
  );
};

export default RatingBreakdown;
