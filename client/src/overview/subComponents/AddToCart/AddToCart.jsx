import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

export default function AddToCart({currentProductStyles}) {
  return (
    <div className='addToCartContainer'>
      <SizeSelector currentProductStyles={currentProductStyles || null}/>
      <QuantitySelector />
      <div className='addToCart'>Add To Cart</div>
      <div className='favBtn'>⭐️</div>
    </div>
  );
};