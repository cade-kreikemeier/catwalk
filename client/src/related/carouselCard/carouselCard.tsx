import React, { ReactNode } from 'react';
import loadState from '../../utils/loadState';
import reviewMetaData from '../../models/reviewMetaData.type';

interface CarouselCardProps {
  loadImageUrl: Promise<string>,
  loadMetaData: Promise<reviewMetaData>
  loadRatings: Promise<number>,
  actionChild: ReactNode,
  actionCallback: () => void
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  const metaData = loadState(props.loadMetaData, null);
  const rating = loadState(props.loadRatings, null);
  const imageUrl = loadState(props.loadImageUrl, null);

  return <div className="carouselCard">
    {(imageUrl === null)
      ? <img src="https://cdn.dribbble.com/users/172519/screenshots/3520576/dribbble-spinner-800x600.gif" />
      : <img src={imageUrl} />
    }
    {(metaData === null)
      ? <p>Loading</p>
      : <React.Fragment>
        <p>{metaData.category}</p>
        <p>{metaData.name}</p>
        <p>${metaData.price}</p>
      </React.Fragment>}
    {(rating === null)
      ? <p>Loading</p>
      : <p>Rating: {rating}</p>
    }
  </div>;
};

export default CarouselCard;
