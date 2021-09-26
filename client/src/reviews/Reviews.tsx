import React from 'react';
import RatingsAndReviews from './RatingsAndReviews';
import ReviewsList from './ReviewsList';

const Reviews: React.FC = () => (
  <section className="section-md reviews">
    <h2>Reviews & Ratings</h2>
    <div className="reviewsContainer">
      <RatingsAndReviews />
      <ReviewsList />
    </div>
  </section>
);

export default Reviews;
