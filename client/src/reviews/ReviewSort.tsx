import React, { useContext } from 'react';
import { ReviewsContext, ReviewsMetadataContext } from '../contexts/Contexts';

const ReviewSort: React.FC = () => {
  const { setSortType } = useContext(ReviewsContext) || {};
  const { reviewCount } = useContext(ReviewsMetadataContext) || {};

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortType?.call(null, e.target.value);
  };

  return (
    <div className="reviewSort">
      <h3>{reviewCount} reviews, sorted by</h3>
      <select name="reviewSortSelect" id="reviewSortSelect" onChange={onChange}>
        <option value="relevant" label="Relevant"></option>
        <option value="newest" label="Most Recent"></option>
        <option value="helpful" label="Most Helpful"></option>
      </select>
    </div>
  );
};

export default ReviewSort;
