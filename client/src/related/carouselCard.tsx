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

function loadState<T>(promise: Promise<T>, initialValue: T): T {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    promise
      .then(d => {
        setData(d);
      });
  });
  return data;
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  const data = loadState(props.loadData, null);
  const rating = loadState(props.loadRatings, null);
  const imageUrl = loadState(props.loadImageUrl, null);

  return <div className="carouselCard">
    {(imageUrl === null)
      ? <img src="https://cdn.dribbble.com/users/172519/screenshots/3520576/dribbble-spinner-800x600.gif" />
      : <img src={imageUrl} />
    }
    {(data === null)
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
