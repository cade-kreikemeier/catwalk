import { characteristics } from '../../models/reviewsMetaData.interface';
import { comparison } from './Context';

export default function buildComparisons(productFrom: characteristics | null, productTo: characteristics | null): comparison {
  const comparison: comparison = {};
  if (productFrom && productTo) {
    for (const characteristic in productTo) {
      comparison[characteristic] = {
        mainValue: null,
        otherValue: productTo[characteristic].value
      };
    }
  }
  return comparison;
}