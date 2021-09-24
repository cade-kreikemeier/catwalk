import React, { useContext } from 'react';
import { ReviewsMetadataContext } from '../../contexts/Contexts';

const AttributesSummary: React.FC = () => {
  const { reviewsMetadata } = useContext(ReviewsMetadataContext) || {};

  if (reviewsMetadata) {
    const characteristics = [];
    for (const char in reviewsMetadata.characteristics) {
      characteristics.push(<div key={char}>
        <label htmlFor={char}>{char}</label>
        <input readOnly
          type="range"
          min="0"
          max="100"
          step="1"
          disabled={true}
          value={parseInt(reviewsMetadata.characteristics[char].value) * 20}>
        </input>
      </div>);
    };

    return (
      <div className="attributesSummary">
        <h4>Attributes Summary</h4>
        {characteristics}
      </div>
    );
  } else {
    return null;
  }
};

export default AttributesSummary;
