import type { Mapped } from "~types/Mapped";
import type { Obj } from "~types/Obj";
import { entries } from "./entries";

export const map = <T extends Obj, P>(obj: T, create: (property: keyof T) => P): Mapped<T, P> => {
  return entries(obj).reduce(
    (acc, [key, value]) => {
      acc[key] = create(value);
      return acc;
    },
    {} as Mapped<T, P>,
  );
};
