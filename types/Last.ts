export type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;
