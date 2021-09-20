import React, { useContext } from 'react';
import Contexts from '../../contexts/Contexts.tsx';
export default function StyleSelector(props) {
  const currentProductStyle = useContext(Contexts.ProductStyleContext);
  let stylePics = [];
  if (currentProductStyle !== null) {
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
            <span key={index} className='thumbnail' onClick={ (e) => { thumbnailClicked(index); } }>
              <img className={`tn${index}`} src={stylePic} style={{ width: '150%', height: '150%' }}></img>
              <span className={`far fa-check-circle checkIcon Icon${index}`}></span>
            </span>
            );
          })
          : <span>None</span>}
      </div>

    </div>
  );
};