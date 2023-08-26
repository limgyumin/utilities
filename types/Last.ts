/* eslint-disable @typescript-eslint/no-explicit-any */

export type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;
