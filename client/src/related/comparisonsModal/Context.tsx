import { createContext } from 'react';

interface comparison {
  [characterist: string] : {
    mainValue: number | null,
    otherValue: number | null,
  }
}

const ComparisonContext = createContext<comparison>({});

export default ComparisonContext;