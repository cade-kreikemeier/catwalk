import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/Contexts.tsx';

export default function ProductPrice() {
  const currentProductData = useContext(ProductContext);
  return (
    <div className='productPrice'>
      {currentProductData ? `$${currentProductData.default_price}` : 'emptyProductPrice'}
    </div>
  );
}