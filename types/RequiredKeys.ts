import type { Obj } from "./Obj";

export type RequiredKeys<T extends Obj> = { [K in keyof T]-?: undefined extends T[K] ? never : K }[keyof T];
