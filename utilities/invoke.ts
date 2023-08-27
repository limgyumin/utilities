import type { Func } from "~types/Func";

export const invoke =
  <T extends Func>(fn: T) =>
  (...args: Parameters<T>) => {
    fn(...args);
  };
