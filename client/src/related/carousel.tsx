import React from 'react';
import CarouselCard from './carouselCard';

interface CarouselProps {
  title: string,
  ids: Array<number>,
  viewModelProducer: (id: number) => Promise<{
    category: string,
    name: string,
    price: string,
  }>
  ratingsProducer: (i: number) => Promise<number>
  imageUrlProducer: (id: number) => Promise<string>
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  console.log(props.ids);
  return <React.Fragment>
    <h3>{props.title}</h3>
    <div className="carousel">
      {props.ids.map((id) => {
        return <CarouselCard
          loadImageUrl={props.imageUrlProducer(id)}
          loadData={props.viewModelProducer(id)}
          loadRatings={props.ratingsProducer(id)}
          actionCallback={() => { console.log('clicked'); }}
          actionChild={(
            <span>👍</span>
          )}
          key={id} />;
      })}
    </div>
  </React.Fragment>;
};

export default Carousel;