import React, { ReactNode, useState } from 'react';

interface CarouselProps {
  title: string,
  ids: number[],
  cardCreator: (id: number) => ReactNode
};

const shownCards = 4;

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const [position, setPosition] = useState(0);

  function incrementPosition() {
    setPosition(position + 1);
  }

  function decrementPosition() {
    setPosition(position - 1);
  }

  const uniqueIds = Array.from(new Set(props.ids));

  return <div>
    <h3>{props.title}</h3>
    <div className="carousel-container">
      {(position > 0)
        ? <button
          data-testid="carousel-left-button"
          className="carousel-arrow carousel-arrow-left"
          onClick={decrementPosition}
        >
          <span className="fas fa-chevron-left"></span>
        </button>
        : null}
      <div className="carousel">
        {(uniqueIds.slice(position, position + shownCards).map(
          id => props.cardCreator(id)
        ))}
      </div>
      {(props.ids.length - position > shownCards)
        ? <button
          data-testid="carousel-right-button"
          className="carousel-arrow carousel-arrow-right"
          onClick={incrementPosition}
        >
          <span className="fas fa-chevron-right"></span>
        </button>
        : null}
    </div>
  </div>;
};

export default Carousel;