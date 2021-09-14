import React from 'react';
import ReviewSort from './ReviewSort';
import ReviewTile from './ReviewTile';

const ReviewsList: React.FC = () => (
  <div
    className="reviewList"
    style={{ border: '3px solid blue' }}
  >
    <h2>Review List</h2>
    <ReviewSort />
    <ReviewTile />
    <button>Add Review</button>
    <button>More Reviews</button>
  </div>
);

export default ReviewsList;
