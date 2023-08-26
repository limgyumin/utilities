/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Func } from "~types/Func";

/**
 * 매개변수 값이 함수인지 판별하는 타입가드 함수입니다.
 *
 * @param value 타입이 정해져 있지 않은 값
 * @returns 값이 함수인지에 대한 boolean 값
 * @category utilities
 */
export const isFunction = <T extends Func<any[], any>>(value: unknown): value is T => {
  return typeof value === "function";
};
