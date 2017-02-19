### `let` vs `var`

The difference is scoping. var is scoped to the nearest function block and let is scoped to the nearest enclosing block (both are global if outside any block),
which can be smaller than a function block.
Also, variables declared with let are not accessible before they are declared in their enclosing block.
As seen in the demo, this will throw a ReferenceError exception.

```js
console.log(b); // ReferenceError: b is not defined
let b = 4;
```
```js
console.log(b); // undefined
var b = 4;
```
```js
function a (){
  for(let i=0;i<2;i++){
    console.log(i);
  }
  console.log(i) // ReferenceError: b is not defined
}
a();
```
```js
function a (){
  for(var i=0;i<2;i++){
    console.log(i);
  }
  console.log(i) // 2
}
a();
```
```js
function a (){
  for(var i=0;i<2;i++){
    console.log(i);
      for(var i=5;i<7;i++){
        console.log(i); 
      }
  }
}
a();

// output : 0,5,6
```
```js
function a (){
  for(let i=0;i<2;i++){
    console.log(i);
      for(let i=5;i<7;i++){
        console.log(i); 
      }
  }
}
a();

// output : 0,5,6,1,5,6
```
Assuming strict mode, `var` will let you re-declare the same variable in the same scope. On the other hand, `let` will not:
```js
'use strict';
let b = 'foo';
let b = 'bar'; // SyntaxError: Identifier 'b' has already been declared
```
```js
'use strict';
let b = 'foo';
let b = 'bar'; // it will not give any error 
```

