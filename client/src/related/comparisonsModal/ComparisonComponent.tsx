import React, { FC } from 'react';

const ComparisonComponent: FC = ({ comparison }) => {
  return (
    <div data-testid="size">
      {comparison?.size?.mainValue
        ? <span>{comparison.size.mainValue}</span>
        : null}
      {comparison.size ? <span>Size</span> : null}
    </div>
  );
};

export default ComparisonComponent;