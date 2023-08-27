type Every = {
  <T>(predicate: (value: T, index: number, arr: readonly T[]) => boolean, arr: readonly T[]): boolean;
  <T>(predicate: (value: T, index: number, arr: readonly T[]) => boolean): (arr: readonly T[]) => boolean;
};

export const every: Every = <T>(predicate: (value: T, index: number, arr: readonly T[]) => boolean, arr?: readonly T[]): any => {
  if (arr === undefined) {
    return (arr: readonly T[]) => arr.every(predicate);
  }

  return arr.every(predicate);
};
