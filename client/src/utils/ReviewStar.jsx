import React from 'react';
import PropTypes from 'prop-types';

function ReviewStar({ currentReviewsMetadata }) {
  function calAvgRating(MetadataRating) {
    let total = 0;
    let number = 0;
    for (let i = 1; i <= 5; i++) {
      if (MetadataRating[i] !== undefined) {
        total = total + (i) * (MetadataRating[i]);
        number = number + (parseInt(MetadataRating[i]));
      }
    };
    let avg = total / number;
    const left = avg % 0.25;
    if (left < 0.125) {
      avg = avg - left;
    } else {
      avg = avg - left + 0.25;
    }
    return avg;
  };

  let rating;
  if (currentReviewsMetadata) {
    rating = calAvgRating(currentReviewsMetadata.ratings) / 5 * 100;
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
  currentReviewsMetadata: PropTypes.object
};

export default ReviewStar;
