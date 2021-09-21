import React from 'react';
import CarouselCardLoader from './carouselCard/carouselCardLoader';


interface CarouselProps {
  title: string,
  ids: number[],
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return <React.Fragment>
    <h3>{props.title}</h3>
    <div className="carousel">
      {props.ids.map(
        id => <CarouselCardLoader id={id} key={id} />
      )}
    </div>
  </React.Fragment>;
};

export default Carousel;