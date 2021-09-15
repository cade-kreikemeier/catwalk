import React from 'react';
import ReviewBreakdown from './ReviewBreakdown';
import ReviewsList from './ReviewsList';
import { ProductProvider } from '../contexts/ProductDataContext';

const Reviews: React.FC = () => (
  <div className="reviews">
    <ProductProvider>
      <ReviewBreakdown />
      <ReviewsList />
    </ProductProvider>
  </div>
);

export default Reviews;
