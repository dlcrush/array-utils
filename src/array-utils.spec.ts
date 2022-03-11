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

  describe('chunk', () => {
    it('chunks an array', () => {
      const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

      const result = ArrayUtils.chunk(arr, 3);

      expect(result).toEqual([['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]);
    });

    it('throws an error if chunkSize is less than 1', () => {
      const arr = ['a', 'b', 'c'];

      expect(() => ArrayUtils.chunk(arr, 0)).toThrow();
    });
  });
});
