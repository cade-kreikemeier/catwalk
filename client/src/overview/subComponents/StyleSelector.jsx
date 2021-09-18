import React from 'react';

export default function StyleSelector() {
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