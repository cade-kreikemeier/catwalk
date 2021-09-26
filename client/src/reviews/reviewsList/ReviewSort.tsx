import React, { useContext } from 'react';
import { ReviewsContext, ReviewsMetadataContext } from '../../contexts/Contexts';

const ReviewSort: React.FC = () => {
  const { reviews, setSortType } = useContext(ReviewsContext) || {};
  // const { reviewCount } = useContext(ReviewsMetadataContext) || {};

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortType?.call(null, e.target.value);
  };

  if (reviews?.results.length) {
    return (
      <div className="reviewSort">
        <h3>{reviews?.results.length} reviews, sorted by</h3>
        <select name="reviewSortSelect" id="reviewSortSelect" onChange={onChange}>
          <option value="relevant" label="Relevant"></option>
          <option value="newest" label="Most Recent"></option>
          <option value="helpful" label="Most Helpful"></option>
        </select>
      </div>
    );
  } else {
    return (
      <div className="reviewSort">
        <h3>No reviews</h3>
      </div>
    );
  }
};

export default ReviewSort;
