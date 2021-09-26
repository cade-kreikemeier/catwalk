import React from 'react';
import RatingsAndReviews from './RatingsAndReviews';
import ReviewsList from './ReviewsList';

const Reviews: React.FC = () => (
  <section className="section-md reviews">
    <div className="reviewsContainer">
      <RatingsAndReviews />
      <ReviewsList />
    </div>
  </section>
);

export default Reviews;
