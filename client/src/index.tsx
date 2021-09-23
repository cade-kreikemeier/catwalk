import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/products/:product_id" component={ProductPage} />
      <Route path="/" component={Home} />
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
