import React, { useContext } from 'react';
import { ReviewsMetadataContext } from '../../contexts/Contexts';
import AttributeSlider from './AttributeSlider';

const AttributesSummary: React.FC = () => {
  const { reviewsMetadata } = useContext(ReviewsMetadataContext) || {};

  if (reviewsMetadata) {
    return (
      <div className="attributesSummary">
        <h4>Attributes Summary</h4>
        {Object.keys(reviewsMetadata.characteristics).map((char: string) => {
          if (reviewsMetadata.characteristics[char].value !== null) {
            return <AttributeSlider
              key={reviewsMetadata.characteristics[char].id}
              char={char}
              value={reviewsMetadata.characteristics[char].value || ''}
            />;
          } else {
            return <></>;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default AttributesSummary;
