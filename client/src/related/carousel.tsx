import React from 'react';
import loadState from '../utils/loadState';
import reviewMetaData from '../models/reviewMetaData.type';
import CarouselCard from './carouselCard';

interface CarouselProps {
  title: string,
  loadIds: Promise<Array<number>>,
  metaDataProducer: (id: number) => Promise<reviewMetaData>
  ratingsProducer: (i: number) => Promise<number>
  imageUrlProducer: (id: number) => Promise<string>
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const ids = loadState(props.loadIds, []);

  return <React.Fragment>
    <h3>{props.title}</h3>
    <div className="carousel">
      {ids.map((id) => {
        return <CarouselCard
          loadImageUrl={props.imageUrlProducer(id)}
          loadMetaData={props.metaDataProducer(id)}
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