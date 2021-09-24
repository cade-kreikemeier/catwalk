import { characteristics } from "../../../models/reviewsMetaData.interface";
import buildComparisons from "../buildComparisons";

describe('Given a blank characteristics object', () => {
  let productOne: characteristics = {};
  beforeEach(() => {
    productOne = {};
  });
  describe('When the other is also empty ', () => {
    const productTwo: characteristics = {};
    test('Then the results should be no comparisons', () => {
      const result = buildComparisons(productOne, productTwo);
      expect(result).toEqual({});
    });
  });
});