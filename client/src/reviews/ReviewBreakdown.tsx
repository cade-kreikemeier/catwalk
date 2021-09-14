import React from 'react';
import RatingBreakdown from './RatingBreakdown';
import RatingSummary from './RatingSummary';
import AttributesSummary from './AttributesSummary';

const ReviewBreakdown: React.FC = () => (
  <div
    className="reviewBreakdown"
    style={{ border: '3px solid red' }}
  >
    <h2>Review Breakdown</h2>
    <RatingSummary />
    <RatingBreakdown />
    <AttributesSummary />
  </div>
);

export default ReviewBreakdown;
