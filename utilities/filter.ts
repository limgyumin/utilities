type Filter = {
  <T, S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, arr: T[]): S[];
  <T, S extends T>(predicate: (value: T, index: number, array: T[]) => value is S): (arr: T[]) => S[];

  <T>(predicate: (value: T, index: number, array: T[]) => boolean, arr: T[]): T[];
  <T>(predicate: (value: T, index: number, array: T[]) => boolean): (arr: T[]) => T[];
};

export const filter: Filter = <T>(predicate: (value: T, index: number, arr: T[]) => boolean, arr?: T[]): any => {
  if (arr === undefined) {
    return (arr: T[]) => arr.filter(predicate);
  }

  return arr.filter(predicate);
};
