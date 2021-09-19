import React from 'react';
import RatingBreakdown from './RatingBreakdown';
import RatingSummary from './RatingSummary';
import AttributesSummary from './AttributesSummary';

const ReviewBreakdown: React.FC = () => (
  <div className="ratingsAndReviews">
    <h2>Ratings & Reviews</h2>
    <RatingSummary />
    <RatingBreakdown />
    <AttributesSummary />
  </div>
);

export default ReviewBreakdown;
