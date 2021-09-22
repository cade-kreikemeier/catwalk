import React, { useEffect, useState } from 'react';
import { product } from '../../models/product.interface';
import { style } from '../../models/style.interface';
import { apiRequest } from '../../utils/apiRequests';
import CarouselCard from './carouselCard';
import findImageUrl from './findImageUrl';

interface CarouselCardLoaderProps {
  id: number
}
const CarouselCardLoader: React.FC<CarouselCardLoaderProps> = ({ id }) => {
  const [style, setStyle] = useState<style | null>(null);
  useEffect(() => {
    apiRequest.getProductStyles(id)
      .then(setStyle)
      .catch(err => console.log(err));
  }, []);

  const [product, setProduct] = useState<product | null>(null);
  useEffect(() => {
    apiRequest.getProductById(id)
      .then(setProduct)
      .catch(err => console.log(err));
  }, []);

  // ---This code seems to cause a cascade of API calls when other providers rerender---
  // const style = loadState(apiRequest.getProductStyles(id), null);
  // const product = loadState(apiRequest.getProductById(id), null);
  return <React.Fragment>
    <CarouselCard
      imageUrl={findImageUrl(style)}
      metaData={{ category: product?.category || '', name: product?.name || '', price: product?.default_price || '' }}
      rating={4}
      actionCallback={console.log}
      actionChild={<span>v</span>}
    />
  </React.Fragment>;
};

export default CarouselCardLoader;