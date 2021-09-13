import React from 'react';
import Carousel from './carousel';

const Related: React.FC = () => {
  const data = Array(20).fill(0).map((e, i) => {
    return ['category' + i, 'title' + i];
  });
  return <div>
    <h2>Related Items</h2>
    <Carousel title="Related Products" data={data}/>
    <Carousel title="Your Outfit" data={data}/>
  </div>
};

export default Related;