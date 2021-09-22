import React, { ReactNode } from 'react';
import productDescription from '../../models/productDescription.interface';

interface CarouselCardProps {
  imageUrl: string,
  metaData: productDescription
  rating: number,
  actionChild: ReactNode,
  actionCallback: () => void,
  localCallback: () => void
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  return <div className="carouselCard">
    {props.imageUrl
      ? <img data-testid="thumbnail" src={props.imageUrl} />
      : null
    }
    <p data-testid="category">{props.metaData.category}</p>
    <p data-testid="name" onClick={props.localCallback}>{props.metaData.name}</p>
    <p data-testid="price">${props.metaData.price}</p>
    <p data-testid="rating">Rating: {props.rating}</p>
    <button onClick={props.actionCallback}>
      {props.actionChild}
    </button>
  </div>;
};

export default CarouselCard;
