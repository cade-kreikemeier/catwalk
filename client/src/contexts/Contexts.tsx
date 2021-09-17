import { createContext } from 'react';
import { product } from '../models/product.interface';
import { reviewMetaData } from '../models/reviewMetaData.interface';
import { reviews } from '../models/reviews.interface';
import { style } from '../models/style.interface';

const Contexts = {
  ProductsContext: createContext<Array<product>>(null),
  ProductContext: createContext<product>(null),
  ProductStyleContext: createContext<Array<style>>(null),
  RelatedProducts: createContext<Array<number>>(null),
  ReviewsContext: createContext<reviews>(null),
  ReviewsMetadataContext: createContext<reviewMetaData>(null)
};

export default Contexts;
