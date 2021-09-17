import { createContext } from 'react';

const Contexts = {
  ModalContext: createContext(null),
  ProductsContext: createContext(null),
  ProductContext: createContext(null),
  ProductStyleContext: createContext(null),
  RelatedProducts: createContext(null),
  ReviewsContext: createContext(null),
  ReviewsMetadataContext: createContext(null)
};

export default Contexts;
