import React from 'react';
import AddToCart from './subComponents/AddToCart.jsx';
import ImageGallery from './subComponents/ImageGallery.jsx';
import ProductInfo from './subComponents/ProductInfo.jsx';
import StyleSelector from './subComponents/StyleSelector.jsx';

export default function OverView(props) {
  return (
    <div className="overViewContainer">
      <div className="overView">
        {/* <h2>OverView!</h2> */}
        <ImageGallery />
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
      </div>
    </div>
  )
};