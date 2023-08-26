/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Func } from "~types/Func";
import type { Unary } from "~types/Unary";
import type { Guard } from "~types/Guard";

import { isFunction } from "./isFunction";

type Condition = {
  <P, S extends P, R1>(condition: Guard<P, S>, truthy: Unary<S, R1> | R1): Unary<P, R1>;
  <P, S extends P, R1, R2>(condition: Guard<P, S>, truthy: Unary<S, R1> | R1, falsy: Unary<P, R2>): Unary<P, R1 | R2>;

  <P extends any[], R1>(condition: Func<P, boolean> | boolean, truthy: Func<P, R1> | R1): Func<P, R1>;
  <P extends any[], R1, R2>(condition: Func<P, boolean> | boolean, truthy: Func<P, R1> | R1, falsy: Func<P, R2> | R2): Func<P, R1 | R2>;
};

export const condition: Condition =
  <P extends any[], R1, R2>(conditional: Func<P, boolean> | boolean, truthy: Func<P, R1> | R1, falsy?: Func<P, R2> | R2) =>
  (...args: P) => {
    const value = isFunction(conditional) ? conditional(...args) : conditional;

    if (value) {
      return isFunction(truthy) ? truthy(...args) : truthy;
    }

    return isFunction(falsy) ? falsy?.(...args) : falsy;
  };
