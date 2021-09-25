import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/products/:product_id" component={ProductPage} />
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default App;