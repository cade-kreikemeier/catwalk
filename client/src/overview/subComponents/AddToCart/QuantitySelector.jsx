import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext } from '../../overview.jsx';

export default function QuantitySelector({ currentProductStyles }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const [open, setOpen] = useState(false);

  let currentStyleIdx;
  let setCurrentStyleIdx;
  let currentQuantityInfo;
  if (StyleIdxContextData) {
    ({ currentStyleIdx, setCurrentStyleIdx } = StyleIdxContextData);
    if (currentProductStyles) {
      currentQuantityInfo = currentProductStyles.results[currentStyleIdx].skus;
    }
  }

  return (
    <div className="quantitySelector">
      <span className='fas fa-angle-down' onClick={() => setOpen(!open)}>
      </span>
      {open && <Dropdown currentQuantityInfo={currentQuantityInfo || null} />}
    </div>
  );
};

function Dropdown({ currentQuantityInfo }) {
  const currentQuantityArr = [];
  for (const key in currentQuantityInfo) {
    currentQuantityArr.push(currentQuantityInfo[key]);
  }
  return (
    <div className="dropdown">
      {currentQuantityArr.length
        ? currentQuantityArr.map((currentQuantity, index) => {
          return (
            <DropdownItem
              key={'dropindex' + index}
              currentQuantity={currentQuantity}
            />
          );
        })
        : null
      }
    </div>
  );
}


function DropdownItem(props) {
  return (
    <span className=" dropdownItem">{props.currentQuantity.quantity}</span>
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