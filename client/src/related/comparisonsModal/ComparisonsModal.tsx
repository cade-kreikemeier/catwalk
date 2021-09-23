import React, { ReactElement } from 'react';
interface ComparisonsModalProps {
  fromId: number,
  toId: number
}
export default function ComparisonsModal(props: ComparisonsModalProps): ReactElement {
  return (
    <div>
      <span>From: {props.fromId}</span>
      <span>To: {props.toId}</span>
    </div>
  );
}