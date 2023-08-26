import type { Obj } from "./Obj";

export type PickRequired<T extends Obj, K extends keyof T> = Omit<Partial<T>, K> & { [U in K]-?: T[U] };
