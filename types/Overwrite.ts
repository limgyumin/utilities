export type Overwrite<T, K> = K & Omit<T, keyof K>;
