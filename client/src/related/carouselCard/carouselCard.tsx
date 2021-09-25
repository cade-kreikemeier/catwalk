import React, { ReactNode } from 'react';
import productDescription from '../../models/productDescription.interface';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReviewStar from '../../utils/ReviewStar';

interface CarouselCardProps {
  imageUrl: string,
  metaData: productDescription
  rating: number,
  actionChild: ReactNode,
  actionCallback: () => void,
  localCallback: () => void
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  return <div className="carouselCard" onClick={props.localCallback} >
    <div>
      {props.imageUrl
        ? <img data-testid="thumbnail" src={props.imageUrl} />
        : null
      }
      <div className="carousel-card-text">
        <p data-testid="category">{props.metaData.category}</p>
        <p data-testid="name">{props.metaData.name}</p>
        <p data-testid="price">${props.metaData.price}</p>
        <ReviewStar rating={props.rating} />
      </div>
    </div>
    <button className="carouselActionButton" onClick={e => {
      props.actionCallback();
      e.stopPropagation();
    }}>
      {props.actionChild}
    </button>

  </div>;
};

export default CarouselCard;
