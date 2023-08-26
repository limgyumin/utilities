import type { Obj } from "~types/Obj";

import { reduce } from "./reduce";

export const pick =
  <T extends Obj, K extends keyof T>(keys: K[]) =>
  (obj: T): Pick<T, K> => {
    return reduce(
      (acc, key) => {
        acc[key] = obj[key];
        return acc;
      },
      {} as Pick<T, K>,
      keys,
    );
  };
