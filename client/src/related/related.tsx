import React from 'react';
import Carousel from './carousel';

const Related: React.FC = () => {
  const data = [
    ['category1', 'title1'],
    ['category2', 'title2']
  ];
  return <div>
    <h2>Related Items</h2>
    <Carousel title="Related Products" data={data}/>
    <Carousel title="Your Outfit" data={data}/>
  </div>
};

export default Related;