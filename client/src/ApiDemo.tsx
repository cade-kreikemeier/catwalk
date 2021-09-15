import React, { useEffect, useState } from 'react';
import { productData } from './models/productData.interface';
import { styleData } from './models/styleData.interface';
import { apiRequest } from './utils/apiRequests';

const ApiDemo: React.FC = () => {
  const [products, setProducts] = useState<productData[]>([]);
  const [product, setProduct] = useState<productData>(null);
  const [styles, setStyles] = useState<styleData[]>();
  const [relatedIds, setRelatedIds] = useState<number[]>();

  useEffect(() => {
    apiRequest.getAllProducts()
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    apiRequest.getProductById(44388)
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    apiRequest.getProductStyles(44388)
      .then(data => setStyles(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    apiRequest.getRelatedProducts(44388)
      .then(data => setRelatedIds(data))
      .catch(err => console.error(err));
  }, []);


  return <React.Fragment>
    <h2>IM A DEMO!!!</h2>
  </React.Fragment>;
};

export default ApiDemo;
