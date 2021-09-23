import React from 'react';
import RatingBreakdown from './RatingsAndReviews/RatingBreakdown';
import RatingSummary from './RatingsAndReviews/RatingSummary';
import AttributesSummary from './RatingsAndReviews/AttributesSummary';

const ReviewBreakdown: React.FC = () => (
  <div className="ratingsAndReviews">
    <h2>Ratings & Reviews</h2>
    <RatingSummary />
    <RatingBreakdown />
    <AttributesSummary />
  </div>
);

export default ReviewBreakdown;
