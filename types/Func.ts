/* eslint-disable @typescript-eslint/no-explicit-any */

export type Func<P extends any[] = any[], R = any> = (...args: P) => R;
