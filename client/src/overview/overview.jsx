import React, { useContext, useState } from 'react';
import Contexts from '../contexts/Contexts.tsx';
import AddToCart from './subComponents/AddToCart.jsx';
import ImageGallery from './subComponents/ImageGallery.jsx';
import ProductInfo from './subComponents/ProductInfo/ProductInfo.jsx';
import StyleSelector from './subComponents/StyleSelector.jsx';
import ExpandImgGallery from './subComponents/ExpandImgGallery.jsx';

const StyleIdxContext = React.createContext();
const StyleNameContext = React.createContext();
const ExpandContext = React.createContext();

function OverView() {
  const currentProductStyles = useContext(Contexts.ProductStyleContext);
  const thumbnailPics = [];
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const [currentStyleName, setCurrentStyleName] = useState('Forest Green & Black by Default');
  const [expandIsClicked, setExpandIsClicked] = useState(false);
  if (currentProductStyles) {
    currentProductStyles.results.forEach((element, index) => {
      thumbnailPics.push(element.photos[0].thumbnail_url);
    });
  }
  return (
    <section className="section-lg">
      <div className="overView">
        <StyleIdxContext.Provider value={{ currentStyleIdx, setCurrentStyleIdx }}>
          <StyleNameContext.Provider value={{ currentStyleName, setCurrentStyleName }}>
            <ExpandContext.Provider value={{ expandIsClicked, setExpandIsClicked }}>
              {expandIsClicked
                ? <ExpandImgGallery />
                : <ImageGallery
                currentProductStyles={ currentProductStyles }
              />}

              <ProductInfo />
              <StyleSelector
                thumbnailPics={ thumbnailPics }
                currentProductStyles={ currentProductStyles }
              />
              <AddToCart />
            </ExpandContext.Provider>
          </StyleNameContext.Provider>
        </StyleIdxContext.Provider>
      </div>
    </section>
  );
};
export default OverView;
export { StyleIdxContext, StyleNameContext, ExpandContext };