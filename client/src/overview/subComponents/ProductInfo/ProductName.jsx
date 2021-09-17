import React, { useEffect, useContext } from 'react';
import Contexts from '../../../contexts/Contexts.tsx';

export default function ProductName() {
  const currentProductData = useContext(Contexts.ProductContext);

  useEffect(() => {
    if (currentProductData !== null) {
      console.log(currentProductData.name);
    }
  }, [currentProductData]);

  return (
    <div className='productName'>
      ProductName
    </div>
  );
};