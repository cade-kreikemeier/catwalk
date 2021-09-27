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
    {<span className="comparison-left">
      {props.main
        ? props.main
        : ''
      }
    </span>
    }
    <span className="comparison-middle">{props.title}</span>
    {<span className="comparison-right">
      {props.other
        ? props.other
        : ''
      }
    </span>
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