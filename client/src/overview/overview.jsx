import React, { useContext, useState } from 'react';
import Contexts from '../contexts/Contexts.tsx';
import AddToCart from './subComponents/AddToCart.jsx';
import ImageGallery from './subComponents/ImageGallery.jsx';
import ProductInfo from './subComponents/ProductInfo/ProductInfo.jsx';
import StyleSelector from './subComponents/StyleSelector.jsx';

function OverView() {
  const currentProductStyle = useContext(Contexts.ProductStyleContext);
  const stylePics = [];
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const StyleContext = React.createContext();

  if (currentProductStyle !== null) {
    currentProductStyle.results.forEach((element, index) => {
      stylePics.push(element.photos[0].thumbnail_url);
    });
  }
  return (
    <div className="overViewContainer">
      <div className="overView">
        <StyleContext.Provider value={setCurrentStyleIdx, setCurrentStyleIdx}>
          <ImageGallery />
          <ProductInfo />
          <StyleSelector
            stylePics={ stylePics.length ? stylePics : null }
            currentStyleIdx={currentStyleIdx}
          />
          <AddToCart />
        </StyleContext.Provider>
      </div>
    </div>
  );
};

export default OverView;