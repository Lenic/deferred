export interface DeferredResult<T> {
  resolve(value?: T | Promise<T>): void;
  reject(reason?: any): void;
  promise: Promise<T>;
}

export default function Deferred<T>() {
  const result: DeferredResult<T> = {
    resolve: null,
    reject: null,
    promise: null
  };

  result.promise = new Promise<T>((resolve, reject) => {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}
