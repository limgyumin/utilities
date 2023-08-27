/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { Func } from "~types/Func";
import type { Last } from "~types/Last";
import type { Returns } from "~types/Returns";

import { reduce } from "./reduce";
import { isArray } from "./isArray";

type Pipped<T extends any[], P extends any[]> = T extends [infer F, ...infer R] ? [Func<P, Returns<F>>, ...Pipped<R, [Returns<F>]>] : T;

export const pipe =
  <T extends Func[], P extends any[]>(...fns: readonly [...Pipped<T, P>]) =>
  (...args: P): Returns<Last<T>> => {
    return reduce(pipeOne, args, fns) as Returns<Last<T>>;
  };

const pipeOne = <T, U extends Func>(x: T, y: U): T => {
  if (isArray(x)) {
    x = y(...x);
  } else {
    x = y(x);
  }

  return x;
};
