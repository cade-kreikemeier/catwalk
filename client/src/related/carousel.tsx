import React from 'react';
import CarouselCard from './carouselCard';

interface CarouselProps {
  title: string,
  data: Array<Array<string>>,
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return <React.Fragment>
    <h3>{props.title}</h3>
    <div className="carousel">
      {props.data.map((d, i) => {
        return <CarouselCard
          imageUrl="https://i.kym-cdn.com/photos/images/newsfeed/000/920/899/715.jpg"
          category={d[0]}
          name={d[1]}
          price="$12.34"
          averageRating={2.3}
          actionCallback={() => { console.log('clicked'); }}
          actionChild={(
            <span>👍</span>
          )}
          key={i} />;
      })}
    </div>
  </React.Fragment>;
};

export default Carousel;