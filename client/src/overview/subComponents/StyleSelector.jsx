import React, { useContext } from 'react';
import Contexts from '../../contexts/Contexts.tsx';
export default function StyleSelector() {
  const currentProductStyle = useContext(Contexts.ProductStyleContext);
  // let testUrl = '';
  let stylePics = [];
  if (currentProductStyle !== null) {
    // testUrl = currentProductStyle.results[0].photos[0].thumbnail_url;
    // stylePics = currentProductStyle.results[0].photos;
    currentProductStyle.results.forEach((element, index) => {
      stylePics.push(element.photos[0].thumbnail_url);
    });
  }
  return (
    <div className='styleSelector'>
      <div className='styleHeadLine'>
        {'Style > Selected Style'}
      </div>
      <div className='styleThumbnail'>
        {stylePics
          ? stylePics.map((stylePic, index) => {
            return (
            <span key={index} className='thumbnail'>
              <img className={`tn${index}`} src={stylePic} style={{ width: '150%', height: '150%' }}></img>
            </span>
            );
          })
          : <span>None</span>}
      </div>

    </div>
  );
};