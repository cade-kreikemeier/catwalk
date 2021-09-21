import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyleContext } from '../overview.jsx';

function StyleSelector({ stylePics }) {
  const contextData = useContext(StyleContext);
  let currentStyleIdx;
  let setCurrentStyleIdx;
  if (contextData !== undefined) {
    ({ currentStyleIdx, setCurrentStyleIdx } = contextData);
  }
  const thumbnailClicked = (e, index) => {
    // console.log(index);
    setCurrentStyleIdx(index);
  };


  return (
    <div className='styleSelector'>
      <div className='styleHeadLine'>
        {'Style > Selected Style'}
      </div>
      <div className='styleThumbnail'>
        {stylePics
          ? stylePics.map((stylePic, index) => {
            return (
            <span key={index} className='thumbnail' onClick={ () => thumbnailClicked(event, index) }>
              <img className={`tn${index}`} src={stylePic} style={{ width: '150%', height: '150%' }}></img>
                {index === currentStyleIdx ? <span className={`far fa-check-circle checkIcon Icon${index}` }></span> : null}
            </span>
            );
          })
          : <span>None</span>}
      </div>

    </div>
  );
};

StyleSelector.propTypes = {
  stylePics: PropTypes.array,
  currentStyleIdx: PropTypes.number
};

export default StyleSelector;