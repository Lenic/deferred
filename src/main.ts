import type { DeferredStatus } from "./types";

const noop = () => {};

export class Deferred<T = void> {
  private $resolve: (value: T | PromiseLike<T>) => void;
  private $reject: (reason?: any) => void;

  promise: Promise<T>;
  status: DeferredStatus;

  constructor() {
    this.$reject = noop;
    this.$resolve = noop;

    this.status = "pending";
    this.promise = new Promise<T>((resolve, reject) => {
      this.$resolve = resolve;
      this.$reject = reject;
    });

    this.reject = this.reject.bind(this);
    this.resolve = this.resolve.bind(this);
  }

  static create<T = void>() {
    return new Deferred<T>();
  }

  resolve(value: T | Promise<T>) {
    this.status = "fulfilled";
    return this.$resolve(value);
  }
  reject(reason?: any) {
    this.status = "rejected";
    return this.$reject(reason);
  }
}
