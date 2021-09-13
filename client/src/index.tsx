import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overview';
import Related from './related/related';
import Reviews from './reviews/reviews';

ReactDOM.render(
  <div>

    <h1>Potatoes!</h1>
    <Overview />
    <Related />
    <Reviews />
  </div>,
  document.getElementById('root')
);
