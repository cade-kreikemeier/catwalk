import React, { useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext } from '../../overview.jsx';
import { SizeContext } from './AddToCart.jsx';

export default function SizeSelector({ currentProductStyles }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const [open, setOpen] = useState(false);

  let currentStyleIdx;
  let currentSizeInfo;

  if (StyleIdxContextData) {
    ({ currentStyleIdx } = StyleIdxContextData);
    if (currentProductStyles) {
      currentSizeInfo = currentProductStyles.results[currentStyleIdx].skus;
    }
  }

  return (
    <div className="sizeSelector" onClick={() => setOpen(!open)}>
      <span className='fas fa-tshirt shirt' >
        Size
      </span>
      { <Dropdown
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

  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         setOpen(!open);
  //       }
  //     }

  //     document.addEventListener('mousedown', handleClickOutside);
  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  //   }, [ref]);
  // }
  return (
    <div className={`dropdown ${open ? 'dropdown-active' : null}` }  >
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
  const { setSize } = useContext(SizeContext);
  return (
    <span className=" dropdownItem" onClick={() => { setSize(currentSize.size); setOpen(!open); } }>{currentSize.size}
    </span>
  );
}

SizeSelector.propTypes = {
  currentStyleIdx: PropTypes.number,
  currentProductStyles: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

Dropdown.propTypes = {
  currentSizeInfo: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

DropdownItem.propTypes = {
  currentSize: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

