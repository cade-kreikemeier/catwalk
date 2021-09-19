import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overview';
import Related from './related/related';
import Reviews from './reviews/Reviews';
import Contexts from './contexts/Contexts';
import * as Providers from './contexts/Providers';
import Modal from './utils/Modal';


const App: React.FC = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <Contexts.ModalContext.Provider value={{ modalContent, setModalContent }}>
      <Providers.ProductsProvider>
        <Providers.ProductProvider>
          <Providers.ReviewMetadataProvider>
            <Providers.ProductSytlesProvider>
              <Overview />
              <Providers.RelatedProductsProvider>
                <Related />
              </Providers.RelatedProductsProvider>
            </Providers.ProductSytlesProvider>
            <Providers.ReviewsProvider>
              <Reviews />
            </Providers.ReviewsProvider>
          </Providers.ReviewMetadataProvider>
        </Providers.ProductProvider>
      </Providers.ProductsProvider>
      <Modal />
    </Contexts.ModalContext.Provider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
