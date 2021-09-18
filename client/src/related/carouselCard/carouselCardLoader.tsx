import React from 'react';
import { apiRequest } from '../../utils/apiRequests';
import loadState from '../../utils/loadState';
import CarouselCard from './carouselCard';

interface CarouselCardLoaderProps {
  id: number
}

const CarouselCardLoader: React.FC<CarouselCardLoaderProps> = ({ id }) => {
  const styles = loadState(apiRequest.getProductStyles(id), []);
  let imageUrl: string;
  if (styles.length === 0) {
    imageUrl = '';
  } else {
    imageUrl = styles[0].results[0].photos[0].thumbnail_url;
  }
  return <React.Fragment>
    <CarouselCard
      imageUrl={imageUrl}
      metaData={{ category: 'Category', name: 'Name', price: (id + '.00') }}
      rating={4}
      actionCallback={console.log}
      actionChild={<span>v</span>}
    />
  </React.Fragment>;
};

export default CarouselCardLoader;