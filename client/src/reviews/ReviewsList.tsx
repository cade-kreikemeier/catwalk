import React, { ReactElement, useContext } from 'react';
import Contexts from '../contexts/Contexts';
import { reviews } from '../models/reviews.interface';
import ReviewSort from './ReviewSort';
import ReviewTile from './ReviewTile';

const ReviewsList: React.FC<reviews> = () => {
  // const [displayReviews, setDisplayReviews] = useState(false);
  // const [numDisplayed, setNumDisplayed] = useState(2);
  // const [filterType, setFilterType] = useState('relevant');


  const { setModalContent } = useContext(Contexts.ModalContext);
  const reviews: reviews | null = useContext(Contexts.ReviewsContext);
  const child = <div>CHILD EXAMPLE</div>;


  const onClick = () => {
    setModalContent(child);
  };

  return (
    <>
      <div className='reviewList'>
        <h2>Reviews List</h2>
        <ReviewSort />
        <div className='reviewTileContainer'>
          {reviews
            ? reviews.results.map((review): ReactElement => <ReviewTile key={review.review_id} review={review} />)
            : null
          }
        </div>
        <button onClick={onClick}>Add Review</button>
        <button>More Reviews</button>
      </div>
    </>
  );
};

export default ReviewsList;

/* const reviews = {
    product: '44389',
    page: 0,
    count: 5,
    results: [
      {
        review_id: 720895,
        rating: 3,
        summary: 'I\'m enjoying wearing these shades',
        recommend: true,
        response: '',
        body: 'Comfortable and practical.',
        date: '2019-04-14T00:00:00.000Z',
        reviewer_name: 'shortandsweeet',
        helpfulness: 5,
        photos: [
          {
            id: 1356154,
            url: 'https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
          },
          {
            id: 1356155,
            url: 'https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
          },
          {
            id: 1356156,
            url: 'https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          }
        ]
      },
      {
        review_id: 720893,
        rating: 4,
        summary: 'I am liking these glasses',
        recommend: true,
        response: 'Glad you\'re enjoying the product!',
        body: 'They are very dark. But that\'s good because I\'m in very sunny spots',
        date: '2019-06-23T00:00:00.000Z',
        reviewer_name: 'bigbrotherbenjamin',
        helpfulness: 5,
        photos: []
      },
      {
        review_id: 720894,
        rating: 4,
        summary: 'They look good on me',
        recommend: true,
        response: '',
        body: 'I so stylish and just my aesthetic.',
        date: '2019-03-12T00:00:00.000Z',
        reviewer_name: 'fashionperson',
        helpfulness: 1,
        photos: []
      },
      {
        review_id: 720897,
        rating: 2,
        summary: 'This product was ok!',
        recommend: false,
        response: '',
        body: 'They\'re fine but I wouldn\'t buy again.',
        date: '2019-05-23T00:00:00.000Z',
        reviewer_name: 'anyone',
        helpfulness: 0,
        photos: []
      },
      {
        review_id: 720896,
        rating: 5,
        summary: 'I\'m not a fan!',
        recommend: false,
        response: 'Sorry to hear. Is there anything in particular you don\'t like?',
        body: 'I don\'t like them',
        date: '2019-06-16T00:00:00.000Z',
        reviewer_name: 'negativity',
        helpfulness: 0,
        photos: []
      }
    ]
  }; */