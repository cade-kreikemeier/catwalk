import { characteristics } from '../../models/reviewsMetaData.interface';
import { comparison } from './comparison';

export default function buildComparisons(productFrom: characteristics | null, productTo: characteristics | null): comparison {
  const comparison: comparison = {};
  for (const characteristic in productFrom) {
    if (productFrom[characteristic].value !== null) {
      let val: string;
      if (!Number.isNaN(Number(productFrom[characteristic].value))) {
        val = Number(productFrom[characteristic].value).toFixed(1);
      } else {
        val = productFrom[characteristic].value || '';
      }
      comparison[characteristic] = {
        mainValue: val,
        otherValue: null
      };
    }
  }
  for (const characteristic in productTo) {
    if (productTo[characteristic].value !== null) {
      let val: string;
      if (!Number.isNaN(Number(productTo[characteristic].value))) {
        val = Number(productTo[characteristic].value).toFixed(1);
      } else {
        val = productTo[characteristic].value || '';
      }
      comparison[characteristic] = {
        mainValue: comparison[characteristic]?.mainValue || null,
        otherValue: val
      };
    }
  }
  return comparison;
}