import React from 'react';
import PropTypes from 'prop-types';

function ReviewStar({ rating }) {
  if (rating) {
    return (
      <div className='reviewStar'>
        <div className='starsContainer'>
          <span className='starOutline star'>★★★★★</span>
          <span className='starFilled star' style={{ width: `${rating / 5 * 100}%` }}>★★★★★</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

ReviewStar.propTypes = {
  rating: PropTypes.object
};

export default ReviewStar;
