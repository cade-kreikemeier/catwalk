import findImageUrl from '../findImageUrl';

test('given an empty list, return an empty string', () => {
  expect(findImageUrl([])).toBe('');
});