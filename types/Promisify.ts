export type Promisify<T> = Promise<T extends infer U ? Awaited<U> : never>;
