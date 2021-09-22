import React, { useContext } from 'react';
import { RelatedProducts } from '../contexts/Contexts';
import Carousel from './carousel/carousel';
import CarouselCardLoader from './carouselCard/carouselCardLoader';

const Related: React.FC = () => {
  const ids = useContext(RelatedProducts) || [];
  return <section className="section-md related">
    <h2>Related Items</h2>
    <Carousel
      title="Related Products"
      ids={ids}
      cardCreator={id => (<CarouselCardLoader key={id} id={id} />)}
    />
  </section>;
};

export default Related;
