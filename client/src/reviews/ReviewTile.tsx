import React from 'react';
import { monthDayYear } from '../utils/dateConversion';
import { review } from '../models/reviews.interface';

const ReviewTile: React.FC<{ review: review }> = ({ review }) => (
  <div className="reviewTile">
    <div className="reviewReviewerName"><h4>{review.reviewer_name}</h4></div>
    <div className="reviewRating">{review.rating} Stars</div>
    <div className="reviewCardDate">{monthDayYear(review.date)}</div>
    <div className="reviewSummary"><strong>{review.summary}</strong></div>
    <div className="reviewBody">
      {review.body}
    </div>
    <div className="reviewRecommend">{review.recommend ? 'Recommened' : null}</div>
    {review.response ? <div className="reviewResponse"><strong>{review.response}</strong></div> : null}
    <div className="reviewHelpfulness">{review.helpfulness}</div>
  </div>
);

export default ReviewTile;
