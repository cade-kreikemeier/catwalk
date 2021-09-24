import React, { useContext } from 'react';
import { ReviewsMetadataContext } from '../../contexts/Contexts';
import RatingMeter from './RatingMeter';

const RatingBreakdown: React.FC = () => {
  const { reviewsMetadata, reviewCount } = useContext(ReviewsMetadataContext) || {};

  if (reviewsMetadata && reviewCount) {
    const recommended = parseInt(reviewsMetadata.recommended.true) || 0;
    const notRecommended = parseInt(reviewsMetadata.recommended.false) || 0;
    const recommendedPercentage = Math.floor((recommended / (recommended + notRecommended)) * 100);
    const meters = [];

    for (let i = 5; i > 0; i--) {
      meters.push(<RatingMeter key={i} rating={i} />);
    }

    return (
      <div className="ratingBreakdown">
        {meters}
        <span>{recommendedPercentage}% of reviewers recommend this product</span>
      </div>
    );
  } else {
    return null;
  }
};

export default RatingBreakdown;
