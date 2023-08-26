export const toMap =
  <T, K, V>(fill: (item: T) => [K, V]) =>
  (arr: T[]): Map<K, V> => {
    const map = new Map<K, V>();

    arr.forEach((item) => map.set(...fill(item)));

    return map;
  };
