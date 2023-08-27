type Unique = {
  <T>(predicate: (x: T, y: T) => boolean, arr: readonly T[]): T[];
  <T>(predicate: (x: T, y: T) => boolean): (arr: readonly T[]) => T[];
};

/**
 * 배열의 특정 중복 값을 가진 요소를 제외한 요소들로 이루어진 배열을 반환하는 함수입니다.
 *
 * @param arr 중복 값을 가진 배열
 * @param predicate 배열의 요소 또는 특정 값을 비교하여 중복 값의 임의 기준을 설정하는 함수
 * @returns 중복 값이 제외된 요소들로 이루어진 배열
 * @example
 * ```ts
 *   const arr = [{ a: 1 }, { a: 2 }, { a: 2 }];
 *
 *   unique((x, y) => x.a === y.a, arr); // [{ a: 1 }, { a: 2 }]
 * ```
 * @category utilities
 */
export const unique: Unique = <T>(predicate: (x: T, y: T) => boolean, arr?: readonly T[]): any => {
  if (arr === undefined) {
    return (arr: readonly T[]) => arr.filter((x, index, arr) => arr.findIndex((y) => predicate(x, y)) === index);
  }

  return arr.filter((x, index, arr) => arr.findIndex((y) => predicate(x, y)) === index);
};
