import { characteristics } from '../../../models/reviewsMetaData.interface';
import buildComparisons from '../buildComparisons';

let productOne: characteristics = {};
let productTwo: characteristics = {};

describe('Given a blank characteristics object', () => {
  beforeEach(() => {
    productOne = {};
  });
  describe('When the other is also empty ', () => {
    beforeEach(() => {
      productTwo = {};
    });
    test('Then the results should be no comparisons', () => {
      const result = buildComparisons(productOne, productTwo);
      expect(result).toEqual({});
    });
  });

  describe('When the other has one characteristic ', () => {
    beforeEach(() => {
      productTwo = { size: { id: 1, value: '2.0' } };
    });
    test('Then the results should be have one characteristic', () => {
      const result = buildComparisons(productOne, productTwo);
      expect(result).toEqual({ size: { mainValue: null, otherValue: '2.0' } });
    });
  });
});