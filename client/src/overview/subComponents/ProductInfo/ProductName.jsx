import React, { useContext } from 'react';
import Contexts from '../../../contexts/Contexts.tsx';

export default function ProductName() {
  const currentProductData = useContext(Contexts.ProductContext);

  return (
    <div className='productName'>
      {currentProductData?.name || 'emptyProductName'}
    </div>
  );
};