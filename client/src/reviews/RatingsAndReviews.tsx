import React from 'react';
import RatingBreakdown from './ratingsAndReviews/RatingBreakdown';
import RatingSummary from './ratingsAndReviews/RatingSummary';
import AttributesSummary from './ratingsAndReviews/AttributesSummary';

const ReviewBreakdown: React.FC = () => (
  <div className="ratingsAndReviews">
    <div className="ratingsAndReviewsBackground">
      <RatingSummary />
      <RatingBreakdown />
      <AttributesSummary />
    </div>
  </div>
);

export default ReviewBreakdown;
