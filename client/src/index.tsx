import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overview';
import Related from './related/related';
import Reviews from './reviews/Reviews';
import { apiRequest } from './utils/apiRequests';
import loadState from './utils/loadState';
import Contexts from './contexts/Contexts';
import Modal from './utils/Modal';


const App: React.FC = () => {
  const products = loadState(apiRequest.getAllProducts(), []);
  const product = loadState(apiRequest.getProductById(44388), null);
  const productSytles = loadState(apiRequest.getProductStyles(44388), null);
  const relatedProducts = loadState(apiRequest.getRelatedProducts(44388), []);
  const reviews = loadState(apiRequest.getReviewsForProduct(44388), null);
  const reviewsMetadata = loadState(apiRequest.getReviewMetadata(44388), null);

  const [modalContent, setModalContent] = useState(null);

  return (
    <Contexts.ModalContext.Provider value={{ modalContent, setModalContent }}>
      <Contexts.ProductsContext.Provider value={products}>
        <Contexts.ProductContext.Provider value={product}>
          <Contexts.ReviewsMetadataContext.Provider value={reviewsMetadata}>
            <Contexts.ProductStyleContext.Provider value={productSytles}>
              <Overview />
              <Contexts.RelatedProducts.Provider value={relatedProducts}>
                <Related />
              </Contexts.RelatedProducts.Provider>
            </Contexts.ProductStyleContext.Provider>
            <Contexts.ReviewsContext.Provider value={reviews}>
              <Reviews />
            </Contexts.ReviewsContext.Provider>
          </Contexts.ReviewsMetadataContext.Provider>
        </Contexts.ProductContext.Provider>
      </Contexts.ProductsContext.Provider>
      <Modal />
    </Contexts.ModalContext.Provider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
