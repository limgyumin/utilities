/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Func } from "~types/Func";
import type { Unary } from "~types/Unary";
import type { Promisify } from "~types/Promisify";

export const handle =
  <T extends Func, C extends Unary<unknown>, F extends Func>(tryFn: T, catchFn: C, finallyFn?: F) =>
  async (...args: Parameters<T>): Promisify<ReturnType<T> | ReturnType<C>> => {
    try {
      return await tryFn(...args);
    } catch (error) {
      return await catchFn(error);
    } finally {
      await finallyFn?.(...args);
    }
  };
