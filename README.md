## Deferred

Similar to jQuery's Deferred, but it's a promise wrapper.

### Useage

```js
var Deferred = require('@lenic/deferred');

const deferred = Deferred();

deferred.promise.then(v => console.log(v), e => console.error(e));

deferred.resolve('hello world'); // hello world
deferred.reject('error message'); // error message
```
