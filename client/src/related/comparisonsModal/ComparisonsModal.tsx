import React, { ReactElement } from 'react';
import { reviewsMetaData } from '../../models/reviewsMetaData.interface';
import { apiRequest } from '../../utils/apiRequests';
import loadState from '../../utils/loadState';
import buildComparisons from './buildComparisons';
import ComparisonComponent from './ComparisonComponent';
import ComparisonContext from './Context';

interface ComparisonsModalProps {
  fromId: number,
  toId: number
}

export default function ComparisonsModal(props: ComparisonsModalProps): ReactElement {
  const productFrom = loadState<reviewsMetaData | null>(apiRequest.getReviewsMetadata(props.fromId), null);
  const productTo = loadState<reviewsMetaData | null>(apiRequest.getReviewsMetadata(props.fromId), null);
  console.log('from: ', productFrom);
  console.log('to: ', productTo);

  const comparison = buildComparisons(productFrom?.characteristics || {}, productTo?.characteristics || {});
  console.log(comparison);

  return (
    <ComparisonContext.Provider value={comparison}>
      <span>From: {props.fromId}</span>
      <span>To: {props.toId}</span>
      <ComparisonComponent comparison={comparison}/>
    </ComparisonContext.Provider>
  );
}