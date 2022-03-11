import ArrayUtils from './array-utils';

describe('array-utils', () => {
  describe('first', () => {
    it('gets the first element', () => {
      const arr = ['hello', 'world'];

      expect(ArrayUtils.first(arr)).toBe('hello');
    });

    it('returns undefined if array is empty', () => {
      expect(ArrayUtils.first([])).not.toBeDefined();
    });
  });
});
