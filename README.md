## Deferred

Similar to jQuery's Deferred, but it's a promise wrapper.

### Useage

```ts
import { Deferred } from "@lenic/deferred";

const deferred = new Deferred<string>();

deferred.promise.then(
  (v) => console.log(v),
  (e) => console.error(e)
);

deferred.resolve("hello world"); // then: hello world
deferred.reject("error message"); // catch: error message
```
