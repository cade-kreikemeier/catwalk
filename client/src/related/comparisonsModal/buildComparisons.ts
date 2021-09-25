import { characteristics } from '../../models/reviewsMetaData.interface';
import { comparison } from './Context';

export default function buildComparisons(productFrom: characteristics | null, productTo: characteristics | null): comparison {
  const comparison: comparison = {};
  for (const characteristic in productFrom) {
    if (productFrom[characteristic].value !== null) {
      comparison[characteristic] = {
        mainValue: productFrom[characteristic].value,
        otherValue: null
      };
    }
  }
  for (const characteristic in productTo) {
    if (productTo[characteristic].value != null) {
      comparison[characteristic] = {
        mainValue: comparison[characteristic]?.mainValue || null,
        otherValue: productTo[characteristic].value
      };
    }
  }
  return comparison;
}