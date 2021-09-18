import React, { useContext } from 'react';
import Contexts from '../../contexts/Contexts.tsx';
export default function StyleSelector() {
  const currentProductStyle = useContext(Contexts.ProductStyleContext);

  if (currentProductStyle !== null) {
    console.log(currentProductStyle);
  }
  return (
    <div className='styleSelector'>
      <div className='styleHeadLine'>
        {'Style > Selected Style'}
      </div>
      <div className='styleThumbnail'>
        <span className='thumbnail tn1'></span>
        <span className='thumbnail tn2'></span>
        <span className='thumbnail tn3'></span>
        <span className='thumbnail tn4'></span>
      </div>

    </div>
  );
};