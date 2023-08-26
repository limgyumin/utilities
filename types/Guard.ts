export type Guard<P, S extends P> = (arg: P) => arg is S;
