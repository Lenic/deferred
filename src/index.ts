interface PromiseFunc<T> {
  (value?: any): void;
}

type DeferredResult<T> = {
  resolve: PromiseFunc<T>;
  reject: PromiseFunc<any>;
  promise: PromiseLike<T>;
};

export default function<T>(): DeferredResult<T> {
  const result: DeferredResult<T> = {
    resolve: null,
    reject: null,
    promise: null
  };

  result.promise = new Promise<any>((resolve, reject) => {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}
