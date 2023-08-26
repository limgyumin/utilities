/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Func } from "~types/Func";

export const run =
  <T extends Func[]>(...fns: T) =>
  (...args: Parameters<T[number]>) => {
    fns.forEach((fn) => fn(...args));
  };
