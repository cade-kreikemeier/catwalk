import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/Contexts.tsx';

export default function ProductName() {
  const currentProductData = useContext(ProductContext);

  return (
    <div className='productNameContainer'>
      <div className='productName'>
        {currentProductData?.name || 'emptyProductName'}
      </div>
      <div className='productPrice'>
        {currentProductData ? `$${currentProductData.default_price}` : 'emptyProductPrice'}
      </div>
    </div>
  );
};