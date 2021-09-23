import { createContext } from 'react';

export interface comparison {
  [characteristic: string] : {
    mainValue: number | null,
    otherValue: number | null,
  }
}

const ComparisonContext = createContext<comparison>({});

export default ComparisonContext;