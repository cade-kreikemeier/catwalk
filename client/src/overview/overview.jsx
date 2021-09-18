import React from 'react';
import AddToCart from './subComponents/AddToCart.jsx';
import ImageGallery from './subComponents/ImageGallery.jsx';
import ProductInfo from './subComponents/ProductInfo.jsx';
import StyleSelector from './subComponents/StyleSelector.jsx';

export default function OverView(props) {
  return (
    <section className="section-lg overView">
      <ImageGallery />
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </section>
  );
};