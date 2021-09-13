import React from 'react';
import Carousel from './carousel';

const Related: React.FC = () => {
  return <div>
    <h2>Related Items</h2>
    <Carousel title="Related Products"/>
    <Carousel title="Your Outfit"/>
  </div>
};

export default Related;