import type { Obj } from "~types/Obj";

import { reduce } from "./reduce";

type PickFn = {
  <T extends Obj, K extends keyof T>(keys: K[], obj: T): Pick<T, K>;
  <T extends Obj, K extends keyof T>(keys: K[]): (obj: T) => Pick<T, K>;
};

const sync = <T extends Obj, K extends keyof T>(keys: K[], obj: T): Pick<T, K> => {
  return reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {} as Pick<T, K>, keys);
};

export const pick: PickFn = <T extends Obj, K extends keyof T>(keys: K[], obj?: T): any => {
  if (obj === undefined) {
    return (obj: T) => sync(keys, obj);
  }

  return sync(keys, obj);
};
