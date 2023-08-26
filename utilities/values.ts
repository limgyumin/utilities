import type { Obj } from "~types/Obj";

export const values = <T extends Obj, K extends keyof T>(obj: T): T[K][] => {
  return Object.values(obj) as T[K][];
};
