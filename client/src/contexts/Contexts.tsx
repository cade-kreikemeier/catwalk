import { createContext } from 'react';
import { product } from '../models/product.interface';
import { reviewMetaData } from '../models/reviewMetaData.interface';
import { reviews } from '../models/reviews.interface';
import { style } from '../models/style.interface';

const ModalContext = createContext(undefined);
ModalContext.displayName = 'ModalContext';

const ProductsContext = createContext<Array<product>>(undefined);
ProductsContext.displayName = 'ProductsContext';

const ProductContext = createContext<product>(undefined);
ProductContext.displayName = 'ProductContext';

const ProductStyleContext = createContext<Array<style>>(undefined);
ProductStyleContext.displayName = 'ProductStyleContext';

const RelatedProducts = createContext<Array<number>>(undefined);
RelatedProducts.displayName = 'RelatedProducts';

const ReviewsContext = createContext<reviews>(undefined);
ReviewsContext.displayName = 'ReviewsContext';

const ReviewsMetadataContext = createContext<reviewMetaData>(undefined);
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
