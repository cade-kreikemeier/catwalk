import { reviewsMetaData } from "../../../models/reviewsMetaData.interface";
import buildComparisons from "../buildComparisons";

describe('Given two blank metadata', () => {
  const productOne = null;
  const productTwo = null;
  const result = buildComparisons(productOne, productTwo);
  test('the comparisons should be an empty list', () => {
    expect(result).toEqual({});
  });
});