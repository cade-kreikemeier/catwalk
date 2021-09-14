import React, { ReactNode } from 'react';

interface CarouselCardProps {
  imageUrl: string,
  category: string,
  title: string,
  price: string,
  averageRating: number,
  actionChild: ReactNode,
  actionCallback: () => void
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  return <div className="carouselCard">
    <img src={props.imageUrl} />
    <p>{props.category}</p>
    <p>{props.title}</p>
  </div>;
};

export default CarouselCard;
