import React, { useContext } from 'react';
import { ReviewsMetadataContext } from '../../contexts/Contexts';
import calAvgRating from '../../utils/calAvgRating';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReviewStar from '../../utils/ReviewStar.jsx';


const RatingSummary: React.FC = () => {
  const { reviewsMetadata, reviewCount } = useContext(ReviewsMetadataContext) || {};

  if (reviewsMetadata?.ratings && Object.keys(reviewsMetadata.ratings).length) {
    return (
      <div className="ratingSummary">
        <h2>{calAvgRating(reviewsMetadata.ratings, 0.1).toString().slice(0, 3)}</h2>
        <ReviewStar rating={calAvgRating(reviewsMetadata.ratings)} />
        <span>{reviewCount} Ratings</span>
      </div>
    );
  } else {
    return null;
  }
};

export default RatingSummary;
