import type { Mapped } from "~types/Mapped";
import type { Obj } from "~types/Obj";

import { entries } from "./entries";
import { reduce } from "./reduce";

type MapObj = {
  <T extends Obj, U>(create: (property: T[keyof T]) => U, obj: T): Mapped<T, U>;
  <T extends Obj, U>(create: (property: T[keyof T]) => U): (obj: T) => Mapped<T, U>;
};

const sync = <T extends Obj, U>(create: (property: T[keyof T]) => U, obj: T): Mapped<T, U> => {
  return reduce((acc, [key, value]) => ({ ...acc, [key]: create(value) }), {} as Mapped<T, U>, entries(obj));
};

export const mapObj: MapObj = <T extends Obj, U>(create: (property: T[keyof T]) => U, obj?: T): any => {
  if (obj === undefined) {
    return (obj: T) => sync(create, obj);
  }

  return sync(create, obj);
};
