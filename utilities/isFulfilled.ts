export const isFulfilled = <T>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T> => {
  return result.status === "fulfilled";
};
