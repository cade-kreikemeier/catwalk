import { Link } from 'react-router-dom';
import React from 'react';

const Home: React.FC = () => (
  <>
    <h2>Home</h2>
    <Link to="/products/44388">Products</Link>
  </>
);

export default Home;