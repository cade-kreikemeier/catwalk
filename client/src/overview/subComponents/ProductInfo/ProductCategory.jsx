import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/Contexts.tsx';

export default function ProductCategory() {
  const currentProductData = useContext(ProductContext);

  return (
    <div className='productCatrgory'>
      {currentProductData?.category || 'emptyProductCategory'}
    </div>
  );
}