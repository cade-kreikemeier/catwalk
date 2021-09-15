import React from 'react';
import Carousel from './carousel';
import dummyData from '../dummyData/products';

const Related: React.FC = () => {
  const data = dummyData.map((e, i: number) => {
    return ['category' + i, 'title' + i];
  });
  return <div>
    <h2>Related Items</h2>
    <Carousel title="Related Products" data={data}/>
    <Carousel title="Your Outfit" data={data}/>
  </div>;
};

export default Related;