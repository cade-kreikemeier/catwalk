import React, { ReactNode } from 'react';
import loadState from '../../utils/loadState';
import reviewMetaData from '../../models/reviewMetaData.type';

interface CarouselCardProps {
  imageUrl: string,
  metaData: reviewMetaData
  rating: number,
  actionChild: ReactNode,
  actionCallback: () => void
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  return <div className="carouselCard">
    <img src={props.imageUrl} />
    <p>{props.metaData.category}</p>
    <p>{props.metaData.name}</p>
    <p>${props.metaData.price}</p>
    <p>Rating: {props.rating}</p>
  </div>;
};

export default CarouselCard;
