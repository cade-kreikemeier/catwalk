import React, { ReactNode } from 'react';

interface CarouselCardProps {
  imageUrl: string,
  category: string,
  name: string,
  price: string,
  averageRating: number,
  actionChild: ReactNode,
  actionCallback: () => void
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  return <div className="carouselCard">
    <img src={props.imageUrl} />
    <p>{props.category}</p>
    <p>{props.name}</p>
  </div>;
};

export default CarouselCard;
