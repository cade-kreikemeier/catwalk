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
  const productId = 44389;

  const products = loadState(apiRequest.getAllProducts(), []);
  const product = loadState(apiRequest.getProductById(productId), null);
  const productSytles = loadState(apiRequest.getProductStyles(productId), null);
  const relatedProducts = loadState(apiRequest.getRelatedProducts(productId), []);
  const reviews = loadState(apiRequest.getReviewsForProduct(productId), null);
  const reviewsMetadata = loadState(apiRequest.getReviewMetadata(productId), null);

  const [modalContent, setModalContent] = useState(null);

  return (
    <Contexts.ModalContext.Provider value={{ modalContent, setModalContent }}>
      <Contexts.ProductsContext.Provider value={products}>
        <Contexts.ProductContext.Provider value={product}>
          <Contexts.ReviewsMetadataContext.Provider value={reviewsMetadata}>
            <Contexts.ReviewsContext.Provider value={reviews}>
              <Contexts.ProductStyleContext.Provider value={productSytles}>
                <Overview />
                <Contexts.RelatedProducts.Provider value={relatedProducts}>
                  <Related />
                </Contexts.RelatedProducts.Provider>
              </Contexts.ProductStyleContext.Provider>
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
