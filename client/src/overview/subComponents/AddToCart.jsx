import React from 'react';

export default function AddToCart() {
  return (
    <div className='addToCartContainer'>
      <div className='sizeSelector'> Select Size</div>
      <div className='quantitySelector'>Quantity</div>
      <div className='addToCart'>Add To Cart</div>
      <div className='favBtn'>⭐️</div>
    </div>
  );
};