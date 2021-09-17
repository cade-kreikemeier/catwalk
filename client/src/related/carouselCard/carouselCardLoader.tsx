import React from 'react';
import { apiRequest } from '../../utils/apiRequests';
import loadState from '../../utils/loadState';
import CarouselCard from './carouselCard';

interface CarouselCardLoaderProps {
  id: number
}

const CarouselCardLoader: React.FC<CarouselCardLoaderProps> = ({ id }) => {
  const styles = loadState(apiRequest.getProductStyles(id), []);
  return <React.Fragment>
    <CarouselCard
      imageUrl={styles[0]?.results[0]?.photos[0]?.thumbnail_url || ''}
      metaData={{ category: 'Category', name: 'Name', price: (id + '.00') }}
      rating={4}
      actionCallback={console.log}
      actionChild={<span>v</span>}
    />
  </React.Fragment>;
};

export default CarouselCardLoader;