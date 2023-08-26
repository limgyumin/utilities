/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Func } from "~types/Func";
import type { Last } from "~types/Last";
import type { Returns } from "~types/Returns";

import { reduce } from "./reduce";

type Pipped<T extends any[], P extends any[]> = T extends [infer F, ...infer R] ? [Func<P, Returns<F>>, ...Pipped<R, [Returns<F>]>] : T;

export const pipe =
  <T extends Func[], P extends any[]>(...fns: Pipped<T, P>) =>
  (...args: P): Returns<Last<T>> => {
    return reduce(pipeOne, args, fns) as Returns<Last<T>>;
  };

const pipeOne = <T, U extends Func>(x: T, y: U): T => {
  if (Array.isArray(x)) {
    x = y(...x);
  } else {
    x = y(x);
  }

  return x;
};
