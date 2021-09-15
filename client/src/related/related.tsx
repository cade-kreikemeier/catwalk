import React from 'react';
import after from '../utils/after';
import Carousel from './carousel';

const Related: React.FC = () => {
  const ids = Array(20).fill(0).map((_, i) => i);
  return <React.Fragment>
    <h2>Related Items</h2>
    <Carousel title="Related Products"
      loadIds={after(500).then(() => ids)}
      imageUrlProducer={
        id => after(3000 - id * 100)
          .then(() => 'https://i.kym-cdn.com/photos/images/newsfeed/000/920/899/715.jpg')
      }
      metaDataProducer={
        id => after(1000 + id * 750)
          .then(() => ({
            category: 'Category',
            name: 'Name',
            price: id + '.00'
          }))
      }
      ratingsProducer={
        id => after(id * 1000)
          .then(() => id / 10)
      }
    />
  </React.Fragment>;
};

export default Related;