import { createContext } from 'react';

const Contexts = {
  ProductsContext: createContext(null),
  ProductContext: createContext(null),
  ProductStyleContext: createContext(null),
  RelatedProducts: createContext(null),
  ReviewsContext: createContext(null),
  ReviewsMetadataContext: createContext(null)
};

const thisContext = createContext('this is default value');

export default Contexts;
