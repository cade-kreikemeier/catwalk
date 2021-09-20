import React, { useContext } from 'react';
import Contexts from '../contexts/Contexts';
import ReviewSort from './ReviewSort';
import ReviewTile from './ReviewTile';

const ReviewsList: React.FC = () => {
  const { setModalContent } = useContext(Contexts.ModalContext);

  const child = <div>CHILD EXAMPLE</div>;

  const onClick = () => {
    setModalContent(child);
  };

  return (
    <>
      <div className="reviewList">
        <h2>Reviews List</h2>
        <ReviewSort />
        <div className="reviewTileContainer">
          <ReviewTile />
          <ReviewTile />
        </div>
        <button onClick={onClick}>Add Review</button>
        <button>More Reviews</button>
      </div>
    </>
  );
};

export default ReviewsList;
