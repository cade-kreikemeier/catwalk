import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overview';
import Related from './related/related';
import Reviews from './reviews/Reviews';
import * as Providers from './contexts/Providers';


const App: React.FC = () => {
  return (
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
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
