import { createContext } from 'react';
import { modalProps } from '../models/modal.interface';
import { product } from '../models/product.interface';
import { reviewsInteraction } from '../models/reviews.interface';
import { reviewsMetaDataInteraction } from '../models/reviewsMetaData.interface';
import { style } from '../models/style.interface';


export const ModalContext = createContext<modalProps | undefined>(undefined);
ModalContext.displayName = 'ModalContext';

export const ProductsContext = createContext<product[] | undefined>(undefined);
ProductsContext.displayName = 'ProductsContext';

export const ProductContext = createContext<product | undefined>(undefined);
ProductContext.displayName = 'ProductContext';

export const ProductStyleContext = createContext<style | undefined>(undefined);
ProductStyleContext.displayName = 'ProductStyleContext';

export const RelatedProducts = createContext<number[] | undefined>(undefined);
RelatedProducts.displayName = 'RelatedProducts';

export const ReviewsContext = createContext<reviewsInteraction | undefined>(undefined);
ReviewsContext.displayName = 'ReviewsContext';

export const ReviewsMetadataContext = createContext<reviewsMetaDataInteraction | undefined>(undefined);
ReviewsMetadataContext.displayName = 'ReviewsMetadataContext';

export const ProductIdContext = createContext<number | undefined>(undefined);
ProductIdContext.displayName = 'ProductId';
