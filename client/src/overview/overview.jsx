import React from 'react';
import AddToCart from './subComponents/AddToCart.jsx';
import ImageGallery from './subComponents/ImageGallery.jsx';
import ProductInfo from './subComponents/ProductInfo.jsx';
import StyleSelector from './subComponents/StyleSelector.jsx';


// const divStyle = {
//   display: 'grid',
//   // grid-gap: '5%',
//   grid-template-columns: "4fr 40% 1fr 30% 4fr",
//   grid-template-rows: "4fr 20% 1fr 10% 1fr 10% 4fr"
// };

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