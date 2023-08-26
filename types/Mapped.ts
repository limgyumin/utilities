import type { Obj } from "./Obj";

export type Mapped<T extends Obj, P> = { [K in keyof T]: P };
