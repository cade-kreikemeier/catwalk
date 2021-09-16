import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductDataContext';
import ReviewSort from './ReviewSort';
import ReviewTile from './ReviewTile';

const ReviewsList: React.FC = () => {
  const data = useContext(ProductContext);
  useEffect(() => console.log(data), []);
  return (
    <div className="reviewList">
      <h2>Reviews List</h2>
      <ReviewSort />
      <div className="reviewTileContainer">
        <ReviewTile />
        <ReviewTile />
      </div>
      <button>Add Review</button>
      <button>More Reviews</button>
    </div>
  );
};

export default ReviewsList;
