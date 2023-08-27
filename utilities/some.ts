type Some = {
  <T>(predicate: (value: T, index: number, arr: T[]) => boolean, arr: T[]): boolean;
  <T>(predicate: (value: T, index: number, arr: T[]) => boolean): (arr: T[]) => boolean;
};

export const some: Some = <T>(predicate: (value: T, index: number, arr: T[]) => boolean, arr?: T[]): any => {
  if (arr === undefined) {
    return (arr: T[]) => arr.some(predicate);
  }

  return arr.some(predicate);
};
