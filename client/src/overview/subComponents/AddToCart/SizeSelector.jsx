import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext } from '../../overview.jsx';
import { SizeContext } from './AddToCart.jsx';

export default function SizeSelector({ currentProductStyles }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const [open, setOpen] = useState(false);

  let currentStyleIdx;
  let setCurrentStyleIdx;
  let currentSizeInfo;

  if (StyleIdxContextData) {
    ({ currentStyleIdx, setCurrentStyleIdx } = StyleIdxContextData);
    if (currentProductStyles) {
      currentSizeInfo = currentProductStyles.results[currentStyleIdx].skus;
    }
  }

  return (
    <div className="sizeSelector">
      <span className='fas fa-tshirt' onClick={() => setOpen(!open)}>
        Size
      </span>
      {open && <Dropdown
        currentSizeInfo={currentSizeInfo || null}
        open={open}
        setOpen={setOpen}
      />}
    </div>
  );
};

function Dropdown({ currentSizeInfo, open, setOpen }) {
  const currentSizeArr = [];
  for (const key in currentSizeInfo) {
    currentSizeArr.push(currentSizeInfo[key]);
  }
  return (
    <div className="dropdown">
      {currentSizeArr.length
        ? currentSizeArr.map((currentSize, index) => {
          return (
            <DropdownItem
              key={'dropindex' + index}
              currentSize={currentSize}
              open={open}
              setOpen={setOpen}
            />
          );
        })
        : null
      }
    </div>
  );
}


function DropdownItem({ currentSize, open, setOpen }) {
  const {size, setSize} = useContext(SizeContext);

  return (
    <span className=" dropdownItem" onClick={() => {setSize(currentSize.size); setOpen(!open);} }>{currentSize.size}</span>
  );
}


SizeSelector.propTypes = {
  currentStyleIdx: PropTypes.number,
  currentProductStyles: PropTypes.object
};

Dropdown.propTypes = {
  currentSizeInfo: PropTypes.object
};

DropdownItem.propTypes = {
  currentSize: PropTypes.object
};

