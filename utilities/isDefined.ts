export const isDefined = <T>(arg: T | undefined): arg is T => {
  return arg !== undefined;
};
