import React from 'react';
import ReviewBreakdown from './ReviewBreakdown';
import ReviewsList from './ReviewsList'

const Reviews: React.FC = () => (
  <React.Fragment>
    <h2>Reviews!</h2>
    <ReviewBreakdown />
    <ReviewsList />
  </React.Fragment>
);

export default Reviews;
