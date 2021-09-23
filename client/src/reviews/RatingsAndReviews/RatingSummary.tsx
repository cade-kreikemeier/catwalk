import React, { useContext } from 'react';
import { ReviewsMetadataContext } from '../../contexts/Contexts';
import calAvgRating from '../../utils/calAvgRating';

const RatingSummary: React.FC = () => {
  const { reviewsMetadata } = useContext(ReviewsMetadataContext) || {};

  if (reviewsMetadata?.ratings && Object.keys(reviewsMetadata.ratings).length) {
    return (
      <div className="ratingSummary">
        <h2>{calAvgRating(reviewsMetadata.ratings, 0.1).toString().slice(0, 3)}</h2>
      </div>
    );
  } else {
    return null;
  }
};

export default RatingSummary;
