import React, { useContext } from 'react';
import { ReviewsMetadataContext } from '../../contexts/Contexts';

const RatingBreakdown: React.FC = () => {
  const { reviewsMetadata, reviewCount } = useContext(ReviewsMetadataContext) || {};

  if (reviewsMetadata && reviewCount) {
    const recommended = parseInt(reviewsMetadata.recommended.true) || 0;
    const notRecommended = parseInt(reviewsMetadata.recommended.false) || 0;
    const recommendedPercentage = Math.floor((recommended / (recommended + notRecommended)) * 100);

    const ratingMeters = [];

    for (let i = 5; i > 0; i--) {
      ratingMeters.push(<div key={i}>
        <label htmlFor={`${i}star`}>{i} Stars </label>
        <meter id={`${i}star`}
          value={parseInt(reviewsMetadata?.ratings[i]) / reviewCount || 0}
        >{i} Star Ratings</meter>
      </div>);
    }

    return (
      <div className="ratingBreakdown">
        {ratingMeters}
        <span>{recommendedPercentage}% of reviewers recommend this product</span>
      </div>
    );
  } else {
    return null;
  }
};

export default RatingBreakdown;
