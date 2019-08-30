export interface PromiseResolveFunc<T> {
  (value?: T | Promise<T>): void;
}

export interface PromiseRejectFunc {
  (reason?: any): void;
}

export interface DeferredResult<T> {
  resolve: PromiseResolveFunc<T>;
  reject: PromiseRejectFunc;
  promise: Promise<T>;
}

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
