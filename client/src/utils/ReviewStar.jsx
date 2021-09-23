import React from 'react';
import PropTypes from 'prop-types';
import calAvgRating from './calAvgRating';

function ReviewStar({ rating }) {
  if (typeof rating === 'object') {
    rating = calAvgRating(rating);
  } else {
    rating = rating / 5 * 100;
  }

  return (
    <div className='reviewStar'>
      <div className='starsContainer'>
        <span className='starOutline star'>★★★★★</span>
        <span className='starFilled star' style={{ width: `${rating}%` }}>★★★★★</span>
      </div>
    </div>
  );
};

ReviewStar.propTypes = {
  rating: PropTypes.object
};

export default ReviewStar;
