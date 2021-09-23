import React, { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Overview from './overview/overview';
import Related from './related/related';
import Reviews from './reviews/Reviews';
import Contexts from './contexts/Contexts';
import * as Providers from './contexts/Providers';
import Modal from './utils/Modal';


const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  return (
    <Router>
      <Contexts.ModalContext.Provider value={{ modalContent, setModalContent }}>
        <Providers.ProductsProvider>
          <Providers.ProductProvider>
            <Providers.ReviewsMetadataProvider>
              <Providers.ProductSytlesProvider>
                <Overview />
                <Providers.RelatedProductsProvider>
                  <Related />
                </Providers.RelatedProductsProvider>
              </Providers.ProductSytlesProvider>
              <Providers.ReviewsProvider>
                <Reviews />
              </Providers.ReviewsProvider>
            </Providers.ReviewsMetadataProvider>
          </Providers.ProductProvider>
        </Providers.ProductsProvider>
        <Modal />
      </Contexts.ModalContext.Provider>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
