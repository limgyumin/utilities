type ToMap = {
  <T, K, V>(fill: (item: T) => [K, V], initial: T, arr: T[]): Map<K, V>;
  <T, K, V>(fill: (item: T) => [K, V], initial: T): (arr: T[]) => Map<K, V>;
};

const sync = <T, K, V>(fill: (item: T) => [K, V], arr: T[]): Map<K, V> => {
  const map = new Map<K, V>();

  arr.forEach((item) => map.set(...fill(item)));

  return map;
};

export const toMap: ToMap = <T, K, V>(fill: (item: T) => [K, V], arr?: T[]): any => {
  if (arr === undefined) {
    return (arr: T[]) => sync(fill, arr);
  }

  return sync(fill, arr);
};
