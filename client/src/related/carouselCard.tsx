import React, { ReactNode, useEffect, useState } from 'react';

interface CarouselCardProps {
  loadImageUrl: Promise<string>,
  loadData: Promise<{
    name: string,
    category: string,
    price: string
  }>
  loadRatings: Promise<number>,
  actionChild: ReactNode,
  actionCallback: () => void
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  const [rating, setRating] = useState(undefined);
  const [data, setData] = useState({ category: null });
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    props.loadData
      .then(d => {
        setData(d);
      });
  });

  useEffect(() => {
    props.loadRatings
      .then(v => {
        setRating(v);
      });
  });

  useEffect(() => {
    props.loadImageUrl
      .then(url => {
        setImageUrl(url);
      });
  });

  return <div className="carouselCard">
    {(imageUrl === '')
      ? <img />
      : <img src={imageUrl} />
    }
    {(rating === undefined)
      ? <p>Loading</p>
      : <p>Rate: {rating}</p>
    }
    {(data.category === null)
      ? <p>Loading</p>
      : <p>{data.category}</p>}
  </div>;
};

export default CarouselCard;
