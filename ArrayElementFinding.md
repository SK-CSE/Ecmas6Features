#### ECMAScript 6
it will return first element greater than 3 or else return undefined
```js
var x =[ 1, 3, 4, 2, 5, 6 ].find(x => x > 3)
console.log(x); //4
```
#### ECMAScript 5
```js
var x = [ 1, 3, 4, 2, 5, 6 ].filter(function (x) { return x > 3; })[0];
console.log(x); //4

var x1 = [ 1, 3, 4, 2, 5, 6 ].filter(function (x) { return x > 3; });
console.log(x1); // [ 4, 5, 6 ]
```
