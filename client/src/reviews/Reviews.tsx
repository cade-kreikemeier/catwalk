import React from 'react';
import ReviewBreakdown from './ReviewBreakdown';
import ReviewsList from './ReviewsList';
// import { retrieveProducts, retrieveReviews } from '../utils/apiRequests';

const Reviews: React.FC = () => {
  // retrieveReviews(44392, 5, 1, 'newest', (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     // res.sendStatus(500);
  //   } else {
  //     console.log(data.data);
  //   }
  // });

  return (
    <div className="reviews">
      <ReviewBreakdown />
      <ReviewsList />
    </div>
  );
};

export default Reviews;
