import type { Obj } from "~types/Obj";
import { entries } from "./entries";
import { reduce } from "./reduce";

export const defined = <T extends Obj>(obj: T): T => {
  return reduce(
    (acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }

      return acc;
    },
    {} as T,
    entries(obj),
  );
};
