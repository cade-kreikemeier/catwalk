import React from 'react';
import ReviewStar from './ReviewStar.jsx'
export default function ProductInfo() {
  return (
    <div className='productInfo'>
      <ReviewStar />
      <h3>Expand Product Name</h3>
      <span>$369</span>
    </div>
  )
};