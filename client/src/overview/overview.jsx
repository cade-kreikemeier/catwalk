import React, { useContext, useState, useEffect } from 'react';
import { ProductStyleContext } from '../contexts/Contexts.tsx';
import AddToCart from './subComponents/AddToCart/AddToCart.jsx';
import ImageGallery from './subComponents/ImageGallery.jsx';
import ProductInfo from './subComponents/ProductInfo/ProductInfo.jsx';
import StyleSelector from './subComponents/StyleSelector.jsx';
import ExpandImageGallery from './subComponents/ExpandImgageGallery.jsx';

const StyleIdxContext = React.createContext();
const StyleNameContext = React.createContext();
const ExpandContext = React.createContext();

function OverView() {
  const currentProductStyles = useContext(ProductStyleContext);
  const thumbnailPics = [];
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const [currentStyleName, setCurrentStyleName] = useState(null);
  const [expandIsClicked, setExpandIsClicked] = useState(false);

  if (currentProductStyles) {
    currentProductStyles.results.forEach((element, index) => {
      thumbnailPics.push(element.photos[0].thumbnail_url);
    });
  }

  useEffect(() => {
    if (currentProductStyles) {
      setCurrentStyleName(currentProductStyles.results[currentStyleIdx].name);
    }
  }, [currentProductStyles]);
  return (
    <section className="section-lg">
      <div className={`overView ${expandIsClicked ? 'expandImageGallery' : 'stdImageGallery'}`}>
        <StyleIdxContext.Provider value={{ currentStyleIdx, setCurrentStyleIdx }}>
          <StyleNameContext.Provider value={{ currentStyleName, setCurrentStyleName }}>
            <ExpandContext.Provider value={{ expandIsClicked, setExpandIsClicked }}>
              {expandIsClicked
                ? <ExpandImageGallery currentProductStyles={currentProductStyles}/>
                : <>
                    {< ImageGallery currentProductStyles={currentProductStyles} />}
                    {<ProductInfo />}
                    {<StyleSelector
                      thumbnailPics={thumbnailPics}
                      currentProductStyles={currentProductStyles}
                    />}
                    {<AddToCart currentProductStyles={currentProductStyles || null}/>}
                  </>
              }
            </ExpandContext.Provider>
          </StyleNameContext.Provider>
        </StyleIdxContext.Provider>
      </div>
    </section>
  );
};
export default OverView;
export { StyleIdxContext, StyleNameContext, ExpandContext };