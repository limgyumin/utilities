import type { Obj } from "~types/Obj";

export const entries = <T extends Obj, K extends keyof T>(obj: T): [K, T[K]][] => {
  return Object.entries(obj) as [K, T[K]][];
};
