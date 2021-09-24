import { createContext } from 'react';

export interface comparison {
  [characteristic: string] : {
    mainValue: string | null,
    otherValue: string | null,
  }
}

const ComparisonContext = createContext<comparison>({});

export default ComparisonContext;