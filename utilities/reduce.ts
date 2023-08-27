type Reduce = {
  <T, U>(fn: (x: U, y: T) => U, initial: U, arr: readonly T[]): U;
  <T, U>(fn: (x: U, y: T) => U, initial: U): (arr: readonly T[]) => U;
};

export const reduce: Reduce = <T, U>(fn: (acc: U, curr: T) => U, initial: U, arr?: readonly T[]) => {
  if (arr === undefined) {
    return (arr: T[]) => arr.reduce(fn, initial);
  }

  return arr.reduce(fn, initial);
};
