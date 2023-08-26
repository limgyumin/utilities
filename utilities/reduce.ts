type Reduce = {
  <T, U>(fn: (x: U, y: T) => U, initial: U, arr: T[]): U;
  <T, U>(fn: (x: U, y: T) => U, initial: U): (arr: T[]) => U;
};

export const reduce: Reduce = <T, U>(fn: (x: U, y: T) => U, initial: U, arr?: T[]) => {
  if (arr === undefined) {
    return (arr: T[]) => arr.reduce(fn, initial);
  }

  return arr.reduce(fn, initial);
};
