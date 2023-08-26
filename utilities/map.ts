import type { Mapped } from "~types/Mapped";
import type { Obj } from "~types/Obj";
import { entries } from "./entries";
import { reduce } from "./reduce";

export const map =
  <T extends Obj, P>(create: (property: keyof T) => P) =>
  (obj: T): Mapped<T, P> => {
    return reduce(
      (acc, [key, value]) => {
        acc[key] = create(value);
        return acc;
      },
      {} as Mapped<T, P>,
      entries(obj),
    );
  };
