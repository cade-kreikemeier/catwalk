import React from 'react';
import ReactDOM from 'react-dom';
import ApiDemo from './ApiDemo';
import Overview from './overview/overview';
import Related from './related/related';
import Reviews from './reviews/Reviews';
import { apiRequest } from './utils/apiRequests';
import loadState from './utils/loadState';
import { ProductContext } from './contexts/ProductDataContext';

const App: React.FC = () => {
  const products = loadState(apiRequest.getAllProducts(), []);

  return (
    <ProductContext.Provider value={products}>
      <ApiDemo />
      <h1>Potatoes!</h1>
      <Overview />
      <Related />
      <Reviews />
    </ProductContext.Provider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
