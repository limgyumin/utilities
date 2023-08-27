import type { Func } from "./Func";

export type Returns<T> = T extends Func<any[], infer R> ? R : never;
