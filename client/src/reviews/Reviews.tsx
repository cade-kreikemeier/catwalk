import React from 'react';
import RatingsAndReviews from './RatingsAndReviews';
import ReviewsList from './ReviewsList';

const Reviews: React.FC = () => (
  <section className="section-md reviews">
    <RatingsAndReviews />
    <ReviewsList />
  </section>
);

export default Reviews;
