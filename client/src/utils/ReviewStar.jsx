import React from 'react';
import PropTypes from 'prop-types';

function ReviewStar({ currentReviewsMetadata }) {
  function calAvgRating(MetadataRating) {
    let total = 0;
    let number = 0;
    for (let i = 0; i < 5; i++) {
      if (MetadataRating[i + 1] !== undefined) {
        total = total + (i + 1) * (MetadataRating[i + 1]);
        number = number + (parseInt(MetadataRating[i + 1]));
      }
    };
    let avg = total / number;
    const left = avg % 0.25;
    avg = avg - left;
    return avg;
  };

  let rating;
  if (currentReviewsMetadata !== null) {
    rating = calAvgRating(currentReviewsMetadata.ratings) / 5 * 100;
  }

  return (
    <div className='reviewStar'>
      <div className='starsContainer'>
        <span className='starOutline'>★★★★★</span>
        <span className='starFilled' style={{ width: `${rating}%` }}>★★★★★</span>
      </div>
    </div>
  );
};

ReviewStar.propTypes = {
  currentReviewsMetadata: PropTypes.object
};

export default ReviewStar;
