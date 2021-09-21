import React, { useContext } from 'react';
import Contexts from '../contexts/Contexts';
import Carousel from './carousel';

const Related: React.FC = () => {
  const ids = useContext(Contexts.RelatedProducts) || [];
  return <section className="section-md related">
    <h2>Related Items</h2>
    <Carousel
      title="Related Products"
      ids={ids}
    />
  </section>;
};

export default Related;
