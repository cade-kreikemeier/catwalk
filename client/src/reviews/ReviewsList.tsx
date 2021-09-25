import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ModalContext, ReviewsContext } from '../contexts/Contexts';
import ReviewSort from './reviewsList/ReviewSort';
import ReviewTile from './reviewsList/ReviewTile';
import ReviewForm from './reviewsList/ReviewForm';

const ReviewsList: React.FC = () => {
  const { setModalContent } = useContext(ModalContext) || {};
  const { reviews } = useContext(ReviewsContext) || {};

  const [displayedReviews, setDisplayReviews] = useState<ReactNode[]>([]);
  const [numDisplayed, setNumDisplayed] = useState(2);

  const addReview = () => {
    setModalContent?.call(null, <ReviewForm />);
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
      {reviews?.results?.length
        ? <>
          <ReviewSort />
          <div className='reviewTileContainer'>
            {[...displayedReviews]}
          </div>
        </>
        : null}
      <div className="btnContainer">
        <button onClick={addReview}>Add Review</button>
        {reviews?.results?.length && numDisplayed < (reviews.results?.length || 16)
          ? <button onClick={moreReviews}>More Reviews</button>
          : null}
      </div>
    </div>
  );
};

export default ReviewsList;
