import React from 'react';
import ReviewBreakdown from './ReviewBreakdown';
import ReviewsList from './ReviewsList';

const Reviews: React.FC = () => (
  <div className="reviews">
    <ReviewBreakdown />
    <ReviewsList />
  </div>
);

export default Reviews;
