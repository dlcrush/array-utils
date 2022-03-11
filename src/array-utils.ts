class ArrayUtils {
  static first<T>(arr: T[]): T | undefined {
    return (arr.length && arr[0]) || undefined;
  }

  static chunk<T>(arr: T[], chunkSize: number): T[][] {
    if (chunkSize < 1) throw Error('chunkSize must be greater than 0.');

    return arr.reduce<T[][]>((result, item, idx) => {
      const chunkIndex = Math.floor(idx / chunkSize);
      const returnVal = result;

      if (!returnVal[chunkIndex]) {
        returnVal[chunkIndex] = [];
      }

      returnVal[chunkIndex].push(item);

      return returnVal;
    }, []);
  }
}

export default ArrayUtils;
