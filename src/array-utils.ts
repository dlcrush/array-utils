class ArrayUtils {
  static first<T>(arr: T[]): T | undefined {
    return (arr.length && arr[0]) || undefined;
  }
}

export default ArrayUtils;
