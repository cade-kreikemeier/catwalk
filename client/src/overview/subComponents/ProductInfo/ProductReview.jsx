import React from 'react';

export default function ProductReview() {
  return (
    <div className='productReview' onClick={() => {
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 0);
    }}>
      Read all review
    </div>
  );
}