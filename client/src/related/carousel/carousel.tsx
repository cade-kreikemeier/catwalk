import React, { ReactElement, ReactNode, useState } from 'react';

interface CarouselProps<T> {
  title: string,
  ids: T[],
  cardCreator: (id: T) => ReactNode,
  shownCards: number
};

const Carousel = <T extends unknown>(props: CarouselProps<T> & { children?: ReactNode }): ReactElement => {
  const [position, setPosition] = useState(0);

  function incrementPosition() {
    setPosition(position + 1);
  }

  function decrementPosition() {
    setPosition(position - 1);
  }

  const uniqueIds = Array.from(new Set(props.ids));

  return <React.Fragment>
    <h3>{props.title}</h3>
    {(position > 0)
      ? <button
        data-testid="carousel-left-button"
        className="carousel-arrow carousel-arrow-left"
        onClick={decrementPosition}
      >
        Left
      </button>
      : null}
    <div className="carousel">
      {(uniqueIds.slice(position, position + props.shownCards).map(
        id => props.cardCreator(id)
      ))}
    </div>
    {(props.ids.length - position > props.shownCards)
      ? <button
        data-testid="carousel-right-button"
        className="carousel-arrow carousel-arrow-right"
        onClick={incrementPosition}
      >
        Right
      </button>
      : null}
  </React.Fragment>;
};

export default Carousel;