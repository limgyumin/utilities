type Map = {
  <T, U>(create: (property: T) => U, arr: readonly T[]): U[];
  <T, U>(create: (property: T) => U): (arr: readonly T[]) => U[];
};

const sync = <T, U>(create: (property: T) => U, arr: readonly T[]): U[] => {
  return arr.map(create);
};

export const map: Map = <T, U>(create: (property: T) => U, arr?: readonly T[]): any => {
  if (arr === undefined) {
    return (arr: readonly T[]) => sync(create, arr);
  }

  return sync(create, arr);
};
