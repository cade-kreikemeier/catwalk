import React from 'react';
import ReactDOM from 'react-dom';
import ApiDemo from './ApiDemo';
import Overview from './overview/overview';
import Related from './related/related';
import Reviews from './reviews/Reviews';


ReactDOM.render(
  <div>
    <ApiDemo />
    <h1>Potatoes!</h1>
    <Overview />
    <Related />
    <Reviews />
  </div>,
  document.getElementById('root')
);
