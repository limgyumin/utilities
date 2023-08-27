import type { Obj } from "~types/Obj";
import { entries } from "./entries";
import { reduce } from "./reduce";
import { isDefined } from "./isDefined";

export const defined = <T extends Obj>(obj: T): T => {
  return reduce((acc, [key, value]) => (isDefined(value) ? { ...acc, [key]: value } : acc), {} as T, entries(obj));
};
