import React, { ReactNode, useState } from 'react';

interface CarouselProps {
  title: string,
  ids: number[],
  cardCreator: (id: number) => ReactNode
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const [position, setPosition] = useState(0);

  function incrementPosition() {
    setPosition(position + 1);
  }

  function decrementPosition() {
    setPosition(position - 1);
  }

  return <React.Fragment>
    <h3>{props.title}</h3>
    {(position > 0)
      ? <button
        data-testid="carousel-left-button"
        onClick={decrementPosition}
      >
        Left
      </button>
      : null}
    <div className="carousel">
      {props.ids.slice(position, position + 4).map(
        id => props.cardCreator(id)
      )}
    </div>
    {(props.ids.length - position > 4)
      ? <button
        data-testid="carousel-right-button"
        onClick={incrementPosition}
      >
        Right
      </button>
      : null}
  </React.Fragment>;
};

export default Carousel;