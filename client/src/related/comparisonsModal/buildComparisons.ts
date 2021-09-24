import { reviewsMetaData } from '../../models/reviewsMetaData.interface';
import { comparison } from './Context';

export default function buildComparisons(productFrom: reviewsMetaData | null, productTo: reviewsMetaData | null):comparison {
  const comparison: comparison = {};
  if (productFrom && productTo) {
    for (const characteristic in productFrom.characteristics) {
      comparison[characteristic] = {
        mainValue: Number(productFrom.characteristics[characteristic].value) || null,
        otherValue: null
      };
    }
    // for (const characteristic in productTo.characteristics) {
    //   comparison[characteristic].otherValue = Number(productFrom.characteristics[characteristic].value) || null;
    //   if (!comparison[characteristic].mainValue) {
    //     comparison[characteristic].mainValue = null;
    //   }
    // }
  }
  return comparison;
}