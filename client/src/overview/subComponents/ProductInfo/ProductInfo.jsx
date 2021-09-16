import React from 'react';
import ReviewStar from './ReviewStar.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';

export default function ProductInfo() {
  return (
    <div className='productInfo'>
      <ReviewStar />
      <ProductCategory />
      <ProductName />
      <ProductPrice />
    </div>
  );
};