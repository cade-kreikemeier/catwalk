import React from 'react';
import reviewMetaData from '../models/reviewMetaData.type';
import CarouselCard from './carouselCard/carouselCard';
import CarouselCardLoader from './carouselCard/carouselCardLoader';

interface CarouselProps {
  title: string,
  ids: Array<number>,
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return <React.Fragment>
    <h3>{props.title}</h3>
    <div className="carousel">
      {props.ids.map((id) => {
        return <CarouselCardLoader
          id={id}
          key={id} />;
      })}
    </div>
  </React.Fragment>;
};

export default Carousel;