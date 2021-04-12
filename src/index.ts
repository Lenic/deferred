export default class Deferred<T = void> {
  private $resolve: (value?: T | Promise<T>) => void;
  private $reject: (reason?: any) => void;

  promise: Promise<T>;

  constructor() {
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

  resolve(value?: T | Promise<T>) {
    return this.$resolve(value);
  }
  reject(reason?: any) {
    return this.$reject(reason);
  }
}
