import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext } from '../../overview.jsx';
import { SizeContext } from './AddToCart.jsx';

export default function QuantitySelector({ currentProductStyles }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const {size, setSize} = useContext(SizeContext);
  const [open, setOpen] = useState(false);

  let currentStyleIdx;
  let setCurrentStyleIdx;
  let currentSizeQuantity = 1;

  if (StyleIdxContextData) {
    ({ currentStyleIdx, setCurrentStyleIdx } = StyleIdxContextData);
    if (currentProductStyles) {
      for(const key in currentProductStyles.results[currentStyleIdx].skus) {
        if ( currentProductStyles.results[currentStyleIdx].skus[key].size === size ) {
          currentSizeQuantity = currentProductStyles.results[currentStyleIdx].skus[key].quantity;
        }

      }
      console.log(currentSizeQuantity)
    }
  }

  return (
    <div className="quantitySelector">
      <span className='fas fa-angle-down' onClick={() => setOpen(!open)}>
      </span>
      {open &&
      <Dropdown
        currentSizeQuantity={currentSizeQuantity}
      />}
    </div>
  );
};

function Dropdown({ currentSizeQuantity }) {
  const currentQuantityArr = [];
  for (let i = 1; i <= currentSizeQuantity; i++) {
    currentQuantityArr.push(i)
  }
  return (
    <div className="dropdown">
      {currentQuantityArr.length
        ? currentQuantityArr.map((number, index) => {
          return (
            <DropdownItem
              key={'dropindex' + index}
              number={number}
            />
          );
        })
        : null
      }
    </div>
  );
}


function DropdownItem({ number }) {
  return (
    <span className=" dropdownItem">{number}</span>
  );
}


QuantitySelector.propTypes = {
  currentStyleIdx: PropTypes.number,
  currentProductStyles: PropTypes.object
};

Dropdown.propTypes = {
  currentQuantityInfo: PropTypes.object
};

DropdownItem.propTypes = {
  currentQuantity: PropTypes.object
};