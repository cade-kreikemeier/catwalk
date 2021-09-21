import React from 'react';
import { apiRequest } from '../../utils/apiRequests';
import loadState from '../../utils/loadState';
import CarouselCard from './carouselCard';
import findImageUrl from './findImageUrl';

interface CarouselCardLoaderProps {
  id: number
}
const CarouselCardLoader: React.FC<CarouselCardLoaderProps> = ({ id }) => {
  const style = loadState(apiRequest.getProductStyles(id), null);
  const product = loadState(apiRequest.getProductById(id), null);

  return <React.Fragment>
    <CarouselCard
      imageUrl={findImageUrl(style)}
      metaData={{ category: product?.category, name: product?.name, price: product?.default_price }}
      rating={4}
      actionCallback={console.log}
      actionChild={<span>v</span>}
    />
  </React.Fragment>;
};

export default CarouselCardLoader;