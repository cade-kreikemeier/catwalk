import React, { FC, useContext, useState } from 'react';
import { monthDayYear } from '../utils/dateConversion';
import { review } from '../models/reviews.interface';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReviewStar from '../utils/ReviewStar.jsx';
import { ReviewsMetadataContext } from '../contexts/Contexts';


const ReviewTile: FC<{ review: review }> = ({ review }) => {
  const { reviewsMetadata } = useContext(ReviewsMetadataContext) || {};
  const [showFullBody, setShowFullBody] = useState<boolean>(false);

  const reviewBody = () => {
    if (review.body.length > 250 && showFullBody) {
      return review.body.slice(0, 1000);
    } else if (review.body.length > 250 && !showFullBody) {
      return review.body.slice(0, 250) + '...';
    } else {
      return review.body;
    }
  };

  // NEED TO FIX THIS!!!
  const toggleShowFullBody = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowFullBody(!showFullBody);
  };

  return (
    <div className="reviewTile">
      <div className="reviewReviewerName"><h4>{review.reviewer_name}</h4></div>
      <div className="reviewRating">
        <ReviewStar currentReviewsMetadata={reviewsMetadata} />
      </div>
      <div className="reviewCardDate">{monthDayYear(review.date)}</div>
      <div className="reviewSummary"><strong>{review.summary.slice(0, 60)}</strong></div>
      <div className="reviewBody">
        <span>{reviewBody()}</span>
        <a style={{ display: 'block' }} onClick={toggleShowFullBody}>
          {review.body.length > 250 && (showFullBody ? 'Show Less' : 'Show More')}
        </a>
      </div>
      <div className="reviewRecommend">
        {review.recommend
          ? <span className={'far fa-check-circle checkIcon'}> I recommend this product</span>
          : null}
      </div>
      {review.response ? <div className="reviewResponse"><strong>{review.response}</strong></div> : null}
      <div className="reviewHelpfulness">{review.helpfulness}</div>
    </div >
  );
};


export default ReviewTile;
