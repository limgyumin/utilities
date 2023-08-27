import type { Include } from "~types/Include";

export const isArray = <T>(arg: T): arg is Include<T, unknown[] | readonly unknown[]> => {
  return Array.isArray(arg);
};
