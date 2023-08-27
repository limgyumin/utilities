export const isNonNull = <T>(arg: T | null): arg is T => {
  return arg !== null;
};
