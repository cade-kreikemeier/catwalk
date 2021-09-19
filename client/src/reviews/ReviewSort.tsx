import React, { useContext } from 'react';
import Contexts from '../contexts/Contexts';

const ReviewSort: React.FC = () => {
  const { setSortType } = useContext(Contexts.ReviewsContext);

  const onChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="reviewSort">
      <h3>### reviews, sorted by</h3>
      <select name="reviewSortSelect" id="reviewSortSelect" onChange={onChange}>
        <option value="relevant" label="Relevant"></option>
        <option value="newest" label="Most Recent"></option>
        <option value="helpful" label="Most Helpful"></option>
      </select>
    </div>
  );
};

export default ReviewSort;
