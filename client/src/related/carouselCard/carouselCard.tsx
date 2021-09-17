import React, { ReactNode } from 'react';
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
    <img data-testid="thumbnail" src={props.imageUrl} />
    <p data-testid="category">{props.metaData.category}</p>
    <p data-testid="name">{props.metaData.name}</p>
    <p data-testid="price">${props.metaData.price}</p>
    <p data-testid="rating">Rating: {props.rating}</p>
  </div>;
};

export default CarouselCard;
