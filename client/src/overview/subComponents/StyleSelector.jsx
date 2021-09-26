import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext, StyleNameContext } from '../overview.jsx';

function StyleSelector({ thumbnailPics, currentProductStyles }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const StyleNameContextData = useContext(StyleNameContext);
  const [display, setDisplay] = useState(false);
  let currentStyleIdx;
  let setCurrentStyleIdx;
  let currentStyleName;
  let setCurrentStyleName;
  if (StyleIdxContextData) {
    ({ currentStyleIdx, setCurrentStyleIdx } = StyleIdxContextData);
    ({ currentStyleName, setCurrentStyleName } = StyleNameContextData);
  }
  const thumbnailClicked = (e, index) => {
    if (currentProductStyles) {
      setCurrentStyleIdx(index);
      setCurrentStyleName(currentProductStyles.results[index].name);
      setDisplay(true);
      setInterval(() => { setDisplay(false); }, 1000);
    }
  };


  return (
    <div className='styleSelector'>
      <div className='styleHeadLine'>
       <p className={'styleCategory'}>{'Style > \n '}</p>
       <p className={`styleName styleInitAnimate ${display ? 'styleInitAnimate-active' : null}`}>{currentStyleName}</p>
      </div>
      <div className='styleThumbnail'>
        {thumbnailPics
          ? thumbnailPics.map((stylePic, index) => {
            return (
            <span key={'stylePic' + index} className={`thumbnail tn${index}`} onClick={ () => thumbnailClicked(event, index) }>
              <img src={stylePic} style={{ width: '155%', height: '155%' }}></img>
                {index === currentStyleIdx ? <span className={`fas fa-check checkIcon Icon${index}` }></span> : null}
            </span>
            );
          })
          : <span>None</span>}
      </div>

    </div>
  );
};

StyleSelector.propTypes = {
  thumbnailPics: PropTypes.array,
  currentStyleIdx: PropTypes.number,
  currentProductStyles: PropTypes.object
};

export default StyleSelector;