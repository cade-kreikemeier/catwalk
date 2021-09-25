import React, { FC } from 'react';
import { comparison } from './comparison';

interface ComparisonComponentProps {
  comparison: comparison
}

interface ComparisonListTileProps {
  title: string,
  main: string | null,
  other: string | null
}

const ComparisonListTile: FC<ComparisonListTileProps> = (props: ComparisonListTileProps) => {
  return <div data-testid={props.title} className="comparison-list-tile">
    {props.main
      ? <span>{props.main}</span>
      : <span></span>
    }
    <span>{props.title}</span>
    {props.other
      ? <span>{props.other}</span>
      : <span></span>
    }
  </div>;
};

const ComparisonComponent: FC<ComparisonComponentProps> = ({ comparison }: ComparisonComponentProps) => {
  return (
    <>
      <span>Comparing</span>
      {Object.keys(comparison).map(key => (
        <ComparisonListTile
          key={key}
          title={key}
          main={comparison[key].mainValue}
          other={comparison[key].otherValue}
        />
      ))}
    </>
  );
};

export default ComparisonComponent;