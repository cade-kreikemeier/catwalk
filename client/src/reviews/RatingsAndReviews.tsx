import React from 'react';
import RatingBreakdown from './ratingsAndReviews/RatingBreakdown';
import RatingSummary from './ratingsAndReviews/RatingSummary';
import AttributesSummary from './ratingsAndReviews/AttributesSummary';

const ReviewBreakdown: React.FC = () => (
  <div className="ratingsAndReviews">
    <h2>Ratings & Reviews</h2>
    <div className="ratingsAndReviewsBackground">
      <RatingSummary />
      <RatingBreakdown />
      <AttributesSummary />
    </div>
  </div>
);

export default ReviewBreakdown;
