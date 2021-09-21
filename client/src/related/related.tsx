import React, { useContext } from 'react';
import Contexts from '../contexts/Contexts';
import Carousel from './carousel';

const Related: React.FC = () => {
  const ids = useContext(Contexts.RelatedProducts) || [];
  return <React.Fragment>
    <h2>Related Items</h2>
    <Carousel
      title="Related Products"
      ids={ids}
    />
  </React.Fragment>;
};

export default Related;