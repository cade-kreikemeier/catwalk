import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ModalContext, ReviewsContext } from '../contexts/Contexts';
import ReviewSort from './ReviewSort';
import ReviewTile from './ReviewTile';

const ReviewsList: React.FC = () => {
  const { setModalContent } = useContext(ModalContext) || {};
  const { reviews } = useContext(ReviewsContext) || {};

  const [displayedReviews, setDisplayReviews] = useState<ReactNode[]>([]);
  const [numDisplayed, setNumDisplayed] = useState(2);

  const child = <div>CHILD EXAMPLE</div>;

  const addReview = () => {
    setModalContent?.call(null, child);
  };

  const moreReviews = () => {
    if (reviews?.results && (reviews.results.length - 1) >= numDisplayed) {
      if (numDisplayed === 14 || numDisplayed === reviews.results.length - 1) {
        setNumDisplayed(numDisplayed + 1);
      } else {
        setNumDisplayed(numDisplayed + 2);
      }
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 0);
    }
  };


  useEffect(() => {
    if (reviews?.results) {
      setDisplayReviews(reviews.results.slice(0, numDisplayed).map((review) => {
        return <ReviewTile key={review.review_id} review={review} />;
      }));
    }
  }, [reviews, numDisplayed]);

  return (
    <div className='reviewList'>
      <ReviewSort />
      <div className='reviewTileContainer'>
        {reviews
          ? [...displayedReviews]
          : null}
      </div>
      <div className="btnContainer">
        <button onClick={addReview}>Add Review</button>
        {reviews && numDisplayed < (reviews.results?.length || 16)
          ? <button onClick={moreReviews}>More Reviews</button>
          : null}
      </div>
    </div>
  );
};

export default ReviewsList;
