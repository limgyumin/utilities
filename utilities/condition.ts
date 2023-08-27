import type { Func } from "~types/Func";
import type { Unary } from "~types/Unary";
import type { Guard } from "~types/Guard";

import { isFunction } from "./isFunction";

type Condition = {
  <P, S extends P, R1>(condition: Guard<P, S>, truthy: Unary<S, R1> | R1): Unary<P, R1 | undefined>;
  <P, S extends P, R1, R2>(condition: Guard<P, S>, truthy: Unary<S, R1> | R1, falsy: Unary<P, R2>): Unary<P, R1 | R2>;

  <P extends any[], R1>(condition: boolean, truthy: Func<P, R1> | R1): R1 | undefined;
  <P extends any[], R1, R2>(condition: boolean, truthy: Func<P, R1> | R1, falsy: Func<P, R2> | R2): R1 | R2;

  <P extends any[], R1>(condition: Func<P, boolean>, truthy: Func<P, R1> | R1): Func<P, R1 | undefined>;
  <P extends any[], R1, R2>(condition: Func<P, boolean>, truthy: Func<P, R1> | R1, falsy: Func<P, R2> | R2): Func<P, R1 | R2>;
};

type Sync = {
  <P, S extends P, R1>(condition: Guard<P, S>, truthy: Unary<S, R1> | R1, arg: P): R1 | undefined;
  <P, S extends P, R1, R2>(condition: Guard<P, S>, truthy: Unary<S, R1> | R1, falsy: Unary<P, R2>, arg: P): R1 | R2;

  <P extends any[], R1>(condition: boolean, truthy: Func<P, R1> | R1): R1 | undefined;
  <P extends any[], R1, R2>(condition: boolean, truthy: Func<P, R1> | R1, falsy: Func<P, R2> | R2): R1 | R2;

  <P extends any[], R1>(condition: Func<P, boolean>, truthy: Func<P, R1> | R1, ...args: P): R1 | undefined;
  <P extends any[], R1, R2>(condition: Func<P, boolean>, truthy: Func<P, R1> | R1, falsy: Func<P, R2> | R2, ...args: P): R1 | R2;
};

export const sync: Sync = <P extends any[], R1, R2>(
  conditional: Func<P, boolean> | boolean,
  truthy: Func<P, R1> | R1,
  falsy?: Func<P, R2> | R2,
  ...args: P
) => {
  const value = isFunction(conditional) ? conditional(...args) : conditional;

  if (value) {
    return isFunction(truthy) ? truthy(...args) : truthy;
  }

  return isFunction(falsy) ? falsy?.(...args) : falsy;
};

/**
 * 첫 번째 인자의 참/거짓 값에 따라 다른 값을 반환하는 함수입니다. 타입가드를 지원합니다.
 * @param conditional boolean 값을 반환하는 함수 또는 boolean 값
 * @param truthy conditional 매개변수의 값이 참인 경우 값을 반환할 함수 또는 값
 * @param falsy conditional 매개변수의 값이 거짓인 경우 값을 반환할 함수 또는 값
 * @returns truthy 또는 falsy의 반환 값
 * @example
 * ```ts
 *   condition(false, 0, 1); // 1
 *
 *   const x: string | undefined = "";
 *
 *   condition(isDefined, (x) => x, () => false)(x); // x: string;
 * ```
 * @category utilities
 */
export const condition: Condition = <P extends any[], R1, R2>(conditional: Func<P, boolean> | boolean, truthy: Func<P, R1> | R1, falsy?: Func<P, R2> | R2) => {
  if (isFunction(conditional)) {
    return (...args: P) => sync(conditional, truthy, falsy, ...args);
  }

  return sync(conditional, truthy, falsy);
};
