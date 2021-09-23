import React, { ReactElement } from 'react';
import { reviewsMetaData } from '../../models/reviewsMetaData.interface';
import { apiRequest } from '../../utils/apiRequests';
import loadState from '../../utils/loadState';
import ComparisonContext, { comparison } from './Context';
interface ComparisonsModalProps {
  fromId: number,
  toId: number
}
export default function ComparisonsModal(props: ComparisonsModalProps): ReactElement {
  const productFrom = loadState<reviewsMetaData | null>(apiRequest.getReviewsMetadata(props.fromId), null);
  const productTo = loadState<reviewsMetaData | null>(apiRequest.getReviewsMetadata(props.fromId), null);
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
  console.log(comparison);

  return (
    <ComparisonContext.Provider value={comparison}>
      <span>From: {props.fromId}</span>
      <span>To: {props.toId}</span>
    </ComparisonContext.Provider>
  );
}