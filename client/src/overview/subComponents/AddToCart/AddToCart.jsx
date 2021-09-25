import React, { useState } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import PropTypes from 'prop-types';

const SizeContext = React.createContext();

function AddToCart({ currentProductStyles }) {
  const [size, setSize] = useState('');
  return (
    <div className='addToCartContainer'>
      <SizeContext.Provider value={{ size, setSize }}>
        <SizeSelector currentProductStyles={currentProductStyles || null}/>
        <QuantitySelector currentProductStyles={currentProductStyles || null}/>
      </SizeContext.Provider>
      <div className='addToCart'>Add To Cart</div>
    </div>
  );
};

AddToCart.propTypes = {
  currentProductStyles: PropTypes.object
};

export default AddToCart;
export { SizeContext };