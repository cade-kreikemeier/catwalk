import React, { FC, useState } from 'react';
import { monthDayYear } from '../utils/dateConversion';
import { review } from '../models/reviews.interface';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReviewStar from '../utils/ReviewStar.jsx';


const ReviewTile: FC<{ review: review }> = ({ review }) => {
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

  const toggleShowFullBody = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowFullBody(!showFullBody);
  };

  const voteHelpfulness = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('I VOTED!');
  };

  const reportReview = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('I REPORTED!');
  };

  return (
    <div className="reviewTile">
      <div className="reviewReviewerName"><h4>{review.reviewer_name}</h4></div>
      <div className="reviewRating">
        <ReviewStar rating={review.rating} />
      </div>
      <div className="reviewCardDate">{monthDayYear(review.date)}</div>
      <div className="reviewSummary"><strong>{review.summary.slice(0, 60)}</strong></div>
      <div className="reviewBody">
        <span>{reviewBody()}</span>
        {review.body.length > 250
          ? <a onClick={toggleShowFullBody}>{(showFullBody ? 'Show Less' : 'Show More')}</a>
          : null}
      </div>
      <div className="reviewRecommend">
        {review.recommend
          ? <span className={'far fa-check-circle checkIcon'}> I recommend this product</span>
          : null}
      </div>
      {review.response
        ? <div className="reviewResponse"><h4>Response from seller</h4><em>{review.response}</em></div>
        : null}
      <div className="reviewHelpfulness">
        <span>Was this review helpful?
          <a onClick={voteHelpfulness}> Yes</a> ({review.helpfulness}) |
          <a onClick={reportReview}> Report</a>
        </span>
      </div>
    </div >
  );
};


export default ReviewTile;
