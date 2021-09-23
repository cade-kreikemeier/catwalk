import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
const Home: React.FC = () => (
  <>
    <h2>Home</h2>
    <Link to="/products/44388">Products</Link>
  </>
);

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
