import React, { useContext } from 'react';
import Contexts from '../../../contexts/Contexts.tsx';

export default function ProductPrice() {
  const currentProductData = useContext(Contexts.ProductContext);
  return (
    <div className='productPrice'>
      {currentProductData ? `$${currentProductData.default_price}` : 'emptyProductPrice'}
    </div>
  );
}