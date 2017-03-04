###ECMAScript 6
```js
function sum(arr){
  return arr.reduce((a,b)=> a+b,0)
}
```
###ECMAScript 5
```js
function sum(arr){
  return arr.reduce(function(a,b){
    return a+b
  },0)
}
```
