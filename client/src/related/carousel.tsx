import React from 'react';

interface CarouselProps {
  title: string,
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return <div>
    <h3>{props.title}</h3>
  </div>
};

export default Carousel;