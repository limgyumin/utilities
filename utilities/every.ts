type Every = {
  <T>(predicate: (value: T, index: number, arr: T[]) => boolean, arr: T[]): boolean;
  <T>(predicate: (value: T, index: number, arr: T[]) => boolean): (arr: T[]) => boolean;
};

export const every: Every = <T>(predicate: (value: T, index: number, arr: T[]) => boolean, arr?: T[]): any => {
  if (arr === undefined) {
    return (arr: T[]) => arr.every(predicate);
  }

  return arr.every(predicate);
};
