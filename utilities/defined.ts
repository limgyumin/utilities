import type { Obj } from "~types/Obj";
import { entries } from "./entries";

export const defined = <T extends Obj>(obj: T): T => {
  return entries(obj).reduce((acc, [key, value]) => {
    if (value === undefined) {
      return acc;
    }

    acc[key] = value;

    return acc;
  }, {} as T);
};
