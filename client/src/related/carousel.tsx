import React from 'react';
import CarouselCard from './carouselCard';

interface CarouselProps {
  title: string,
  data: Array<Array<string>>,
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return <React.Fragment>
      <h3>{props.title}</h3>
      <div>
      {props.data.map((d, i) => {
        return <CarouselCard category={d[0]} title={d[1]} key={i}/>;
      })}
      </div>
  </React.Fragment>;
};

export default Carousel;