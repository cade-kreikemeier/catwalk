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
  const [rating, setRating] = useState(null);
  const [data, setData] = useState({ category: null, name: null, price: null });
  const [imageUrl, setImageUrl] = useState(null);

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
    {(imageUrl === null)
      ? <img src="https://cdn.dribbble.com/users/172519/screenshots/3520576/dribbble-spinner-800x600.gif" />
      : <img src={imageUrl} />
    }
    {(data.category === null)
      ? <p>Loading</p>
      : <React.Fragment>
        <p>{data.category}</p>
        <p>{data.name}</p>
        <p>${data.price}</p>
      </React.Fragment>}
    {(rating === null)
      ? <p>Loading</p>
      : <p>Rating: {rating}</p>
    }
  </div>;
};

export default CarouselCard;
