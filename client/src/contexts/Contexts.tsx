import { createContext } from 'react';
import { modalProps } from '../models/modal.interface';
import { product } from '../models/product.interface';
import { reviewsInteraction } from '../models/reviews.interface';
import { reviewsMetaDataInteraction } from '../models/reviewsMetaData.interface';
import { style } from '../models/style.interface';


const ModalContext = createContext<modalProps | undefined>(undefined);
ModalContext.displayName = 'ModalContext';

const ProductsContext = createContext<product[] | undefined>(undefined);
ProductsContext.displayName = 'ProductsContext';

const ProductContext = createContext<product | undefined>(undefined);
ProductContext.displayName = 'ProductContext';

const ProductStyleContext = createContext<style | undefined>(undefined);
ProductStyleContext.displayName = 'ProductStyleContext';

const RelatedProducts = createContext<number[] | undefined>(undefined);
RelatedProducts.displayName = 'RelatedProducts';

const ReviewsContext = createContext<reviewsInteraction | undefined>(undefined);
ReviewsContext.displayName = 'ReviewsContext';

const ReviewsMetadataContext = createContext<reviewsMetaDataInteraction | undefined>(undefined);
ReviewsMetadataContext.displayName = 'ReviewsMetadataContext';

const ProductIdContext = createContext<number | undefined>(undefined);
ProductIdContext.displayName = 'ProductId';

const Contexts = {
  ModalContext,
  ProductsContext,
  ProductContext,
  ProductStyleContext,
  RelatedProducts,
  ReviewsContext,
  ReviewsMetadataContext,
  ProductIdContext
};

export default Contexts;
