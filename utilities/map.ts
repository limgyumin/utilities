import type { Mapped } from "~types/Mapped";
import type { Obj } from "~types/Obj";
import { entries } from "./entries";
import { reduce } from "./reduce";

type Map = {
  <T extends Obj, P>(create: (property: keyof T) => P, obj: T): Mapped<T, P>;
  <T extends Obj, P>(create: (property: keyof T) => P): (obj: T) => Mapped<T, P>;
};

const sync = <T extends Obj, P>(create: (property: keyof T) => P, obj: T): Mapped<T, P> => {
  return reduce((acc, [key, value]) => ({ ...acc, [key]: create(value) }), {} as Mapped<T, P>, entries(obj));
};

export const map: Map = <T extends Obj, P>(create: (property: keyof T) => P, obj?: T): any => {
  if (obj === undefined) {
    return (obj: T) => sync(create, obj);
  }

  return sync(create, obj);
};
