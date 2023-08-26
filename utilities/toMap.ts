export const toMap = <T, K, V>(arr: T[], fill: (item: T) => [K, V]): Map<K, V> => {
  const map = new Map<K, V>();

  arr.forEach((item) => map.set(...fill(item)));

  return map;
};
