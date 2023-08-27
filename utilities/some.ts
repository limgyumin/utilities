type Some = {
  <T>(predicate: (value: T, index: number, arr: readonly T[]) => boolean, arr: readonly T[]): boolean;
  <T>(predicate: (value: T, index: number, arr: readonly T[]) => boolean): (arr: readonly T[]) => boolean;
};

export const some: Some = <T>(predicate: (value: T, index: number, arr: readonly T[]) => boolean, arr?: readonly T[]): any => {
  if (arr === undefined) {
    return (arr: readonly T[]) => arr.some(predicate);
  }

  return arr.some(predicate);
};
