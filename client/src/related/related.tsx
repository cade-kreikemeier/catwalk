import React from 'react';
import Carousel from './carousel';

const Related: React.FC = () => {
  const ids = Array(20).fill(0).map((_, i) => i);
  return <div>
    <h2>Related Items</h2>
    <Carousel title="Related Products"
      ids={ids}
      imageUrlProducer={id => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('https://i.kym-cdn.com/photos/images/newsfeed/000/920/899/715.jpg');
          }, 3000 - id * 100);
        });
      }}
      viewModelProducer={id => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              category: 'Category',
              name: 'Name',
              price: id + '.00'
            });
          }, 1000 + id * 750);
        });
      }}
      ratingsProducer={
        id => new Promise(
          resolve => setTimeout(
            () => { resolve(id / 10); },
            id * 1000
          )
        )
      }
    />
  </div>;
};

export default Related;