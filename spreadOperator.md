###spread operator
```js
var arr1 = [1,2];
var arr2 = ["saurabh","kumar"];
var arr3 = ["ecmas6",arr1,45,arr2];
console.log(arr3); // [ 'ecmas6', [ 1, 2 ], 45, [ 'saurabh', 'kumar' ] ]
```
```js
var arr4 = ["ecmas6",...arr1,45,...arr2]; // use of spread operator(...)
console.log(arr4); // [ 'ecmas6', 1, 2, 45, 'saurabh', 'kumar' ] 
```
