import React, { useContext } from 'react';
import Contexts from '../../../contexts/Contexts.tsx';

export default function ProductCategory() {
  const currentProductData = useContext(Contexts.ProductContext);

  return (
    <div className='productCatrgory'>
      {currentProductData ? currentProductData.category : 'emptyProductCategory'}
    </div>
  );
}