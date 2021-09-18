import React from 'react';
import ReviewBreakdown from './ReviewBreakdown';
import ReviewsList from './ReviewsList';

const Reviews: React.FC = () => (
  <section className="section-md reviews">
    <ReviewBreakdown />
    <ReviewsList />
  </section>
);

export default Reviews;
