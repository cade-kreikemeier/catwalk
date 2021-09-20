import React from 'react';
import PropTypes from 'prop-types';

function StyleSelector({ stylePics, currentStyleIdx }) {
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