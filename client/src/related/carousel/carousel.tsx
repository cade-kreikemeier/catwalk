import React, { ReactNode } from 'react';


interface CarouselProps {
  title: string,
  ids: number[],
  cardCreator: (id: number) => ReactNode
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return <React.Fragment>
    <h3>{props.title}</h3>
    <div className="carousel">
      {props.ids.map(
        id => props.cardCreator(id)
      )}
    </div>
    {(props.ids.length > 4)
      ? <div data-testid="carousel-right-button">Right</div>
      : null}
  </React.Fragment>;
};

export default Carousel;