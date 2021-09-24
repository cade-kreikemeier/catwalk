import React, { FC } from 'react';
import { comparison } from './Context';

interface ComparisonComponentProps {
  comparison: comparison
}

const ComparisonComponent: FC<ComparisonComponentProps> = ({ comparison }: ComparisonComponentProps) => {
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