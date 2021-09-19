import { createContext } from 'react';


const ModalContext = createContext(undefined);
ModalContext.displayName = 'ModalContext';

const ProductsContext = createContext(undefined);
ProductsContext.displayName = 'ProductsContext';

const ProductContext = createContext(undefined);
ProductContext.displayName = 'ProductContext';

const ProductStyleContext = createContext(undefined);
ProductStyleContext.displayName = 'ProductStyleContext';

const RelatedProducts = createContext(undefined);
RelatedProducts.displayName = 'RelatedProducts';

const ReviewsContext = createContext(undefined);
ReviewsContext.displayName = 'ReviewsContext';

const ReviewsMetadataContext = createContext(undefined);
ReviewsMetadataContext.displayName = 'ReviewsMetadataContext';


const Contexts = {
  ModalContext,
  ProductsContext,
  ProductContext,
  ProductStyleContext,
  RelatedProducts,
  ReviewsContext,
  ReviewsMetadataContext
};

export default Contexts;
