import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext } from '../overview.jsx';

export default function ImageGallery({ currentProductStyles }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const stylePics = [];
  const [currentSlide, setCurrentSlide] = useState(0);
  let slideLength = 0;
  let currentStyleIdx;
  if (StyleIdxContextData && currentProductStyles) { // how to made this line dryer?
    ({ currentStyleIdx } = StyleIdxContextData);
    currentProductStyles.results[currentStyleIdx].photos.forEach((photo, index) => {
      stylePics.push(photo.url);
    });
    slideLength = stylePics.length;
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  return (
    <div className='imageGallery'>
      <button className={ 'fas fa-chevron-left left-arrow'} onClick={ prevSlide } />
      <button className={ 'fas fa-chevron-right right-arrow' } onClick={ nextSlide } />
      {stylePics.map((stylePic, index) => {
        return (
          <div key={index} className={index === currentSlide ? 'slide-active' : 'slide'}>
             {index === currentSlide && (<img src={stylePic} alt='style image' className='image' />)}
          </div>
        );
      })}
    </div>
  );
};

ImageGallery.propTypes = {
  currentStyleIdx: PropTypes.number,
  currentProductStyles: PropTypes.object
};