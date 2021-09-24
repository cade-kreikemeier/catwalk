import React, { ReactElement } from 'react';
import { reviewsMetaData } from '../../models/reviewsMetaData.interface';
import { apiRequest } from '../../utils/apiRequests';
import loadState from '../../utils/loadState';
import buildComparisons from './buildComparisons';
import ComparisonContext from './Context';

interface ComparisonsModalProps {
  fromId: number,
  toId: number
}

export default function ComparisonsModal(props: ComparisonsModalProps): ReactElement {
  const productFrom = loadState<reviewsMetaData | null>(apiRequest.getReviewsMetadata(props.fromId), null);
  const productTo = loadState<reviewsMetaData | null>(apiRequest.getReviewsMetadata(props.fromId), null);

  const comparison = buildComparisons(productFrom, productTo);
  console.log(comparison);

  return (
    <ComparisonContext.Provider value={comparison}>
      <span>From: {props.fromId}</span>
      <span>To: {props.toId}</span>
    </ComparisonContext.Provider>
  );
}