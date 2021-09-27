import React, { ReactElement } from 'react';
import { reviewsMetaData } from '../../models/reviewsMetaData.interface';
import { apiRequest } from '../../utils/apiRequests';
import loadState from '../../utils/loadState';
import buildComparisons from './buildComparisons';
import ComparisonComponent from './ComparisonComponent';

interface ComparisonsModalProps {
  fromId: number,
  toId: number
}

export default function ComparisonsModal(props: ComparisonsModalProps): ReactElement {
  const productFrom = loadState<reviewsMetaData | null>(apiRequest.getReviewsMetadata(props.fromId), null);
  const productTo = loadState<reviewsMetaData | null>(apiRequest.getReviewsMetadata(props.toId), null);

  const comparison = buildComparisons(productFrom?.characteristics || {}, productTo?.characteristics || {});

  return (
    <ComparisonComponent comparison={comparison} />
  );
}