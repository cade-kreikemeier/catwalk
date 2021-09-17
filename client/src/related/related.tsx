import React, { useContext } from 'react';
import Contexts from '../contexts/Contexts';
import Carousel from './carousel';

const Related: React.FC = () => {
  const ids = useContext(Contexts.RelatedProducts);
  return <React.Fragment>
    <h2>Related Items</h2>
    <Carousel
      title="Related Products"
      ids={ids}
      imageUrlProducer={
        () => 'https://i.kym-cdn.com/photos/images/newsfeed/000/920/899/715.jpg'
      }
      metaDataProducer={
        id => ({
          category: 'Category',
          name: 'Name',
          price: id + '.00'
        })
      }
      ratingsProducer={
        id => id / 10
      }
    />
  </React.Fragment>;
};

export default Related;