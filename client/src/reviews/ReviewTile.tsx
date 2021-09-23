import React, { FC, useContext } from 'react';
import { monthDayYear } from '../utils/dateConversion';
import { review } from '../models/reviews.interface';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReviewStar from '../utils/ReviewStar.jsx';
import { ReviewsMetadataContext } from '../contexts/Contexts';


const ReviewTile: FC<{ review: review }> = ({ review }) => {
  const { reviewsMetadata } = useContext(ReviewsMetadataContext) || {};
  return (
    <div className="reviewTile">
      <div className="reviewReviewerName"><h4>{review.reviewer_name}</h4></div>
      <div className="reviewRating">
        <ReviewStar currentReviewsMetadata={reviewsMetadata} />
      </div>
      <div className="reviewCardDate">{monthDayYear(review.date)}</div>
      <div className="reviewSummary"><strong>{review.summary.slice(0, 60)}</strong></div>
      <div className="reviewBody">
        {review.body}
      </div>
      <div className="reviewRecommend">{review.recommend
        ? <span className={'far fa-check-circle checkIcon'}> I recommend this product</span>
        : null}
      </div>
      {review.response ? <div className="reviewResponse"><strong>{review.response}</strong></div> : null}
      <div className="reviewHelpfulness">{review.helpfulness}</div>
    </div>
  );
};

export default ReviewTile;
