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
        <h3> {'Style > Selected Style'}</h3>
      </div>
      <div className='styleThumbnail'>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>

      </div>

    </div>
  );
};