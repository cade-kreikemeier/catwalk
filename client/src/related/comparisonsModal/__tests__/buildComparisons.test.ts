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
  describe('When the other has many characteristic ', () => {
    beforeEach(() => {
      productTwo = {
        size: { id: 1, value: '2.0' },
        weight: { id: 1, value: '3.0' },
        quality: { id: 1, value: '3.4' },
        heft: { id: 1, value: '1.0' }
      };
    });
    test('Then the results should be have one characteristic', () => {
      const result = buildComparisons(productOne, productTwo);
      expect(result).toEqual({
        size: { mainValue: null, otherValue: '2.0' },
        weight: { mainValue: null, otherValue: '3.0' },
        quality: { mainValue: null, otherValue: '3.4' },
        heft: { mainValue: null, otherValue: '1.0' }
      });
    });
  });
});