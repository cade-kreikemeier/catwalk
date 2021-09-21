import React, { useContext, useState } from 'react';
import Contexts from '../contexts/Contexts.tsx';
import AddToCart from './subComponents/AddToCart.jsx';
import ImageGallery from './subComponents/ImageGallery.jsx';
import ProductInfo from './subComponents/ProductInfo/ProductInfo.jsx';
import StyleSelector from './subComponents/StyleSelector.jsx';
const StyleIdxContext = React.createContext();
const StyleNameContext = React.createContext();

function OverView() {
  const currentProductStyle = useContext(Contexts.ProductStyleContext);
  const stylePics = [];
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const [currentStyleName, setCurrentStyleName] = useState('Forest Green & Black by Default');
  if (currentProductStyle) {
    currentProductStyle.results.forEach((element, index) => {
      stylePics.push(element.photos[0].thumbnail_url);
    });
  }
  return (
    <div className="overViewContainer">
      <div className="overView">
        <StyleIdxContext.Provider value={{ currentStyleIdx, setCurrentStyleIdx }}>
          <StyleNameContext.Provider value={{ currentStyleName, setCurrentStyleName }}>
            <ImageGallery />
            <ProductInfo />
            <StyleSelector
              stylePics={ stylePics }
              currentProductStyle={ currentProductStyle }
            />
            <AddToCart />
          </StyleNameContext.Provider>
        </StyleIdxContext.Provider>
      </div>
    </div>
  );
};
export default OverView;
export { StyleIdxContext, StyleNameContext };