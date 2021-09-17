import React from 'react';
import reviewMetaData from '../models/reviewMetaData.type';
import CarouselCard from './carouselCard/carouselCard';

interface CarouselProps {
  title: string,
  ids: Array<number>,
  metaDataProducer: (id: number) => reviewMetaData
  ratingsProducer: (i: number) => number
  imageUrlProducer: (id: number) => string
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return <React.Fragment>
    <h3>{props.title}</h3>
    <div className="carousel">
      {props.ids.map((id) => {
        return <CarouselCard
          imageUrl={props.imageUrlProducer(id)}
          metaData={props.metaDataProducer(id)}
          rating={props.ratingsProducer(id)}
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