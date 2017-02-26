###ECMAScript 6

```js
var cat = {
  meow(times) {
    console.log("meow".repeat(times));
  },
  purr(times) {
    console.log("purr".repeat(times));
  },
  snore(times) {
    console.log("ZZZ".repeat(times));
  }
};

cat.meow(3);
cat.purr(4);
cat.snore(5);
```
###ECMAScript 5

```js
var cat = {
  meow : function(times) {
    console.log(Array(times+1).join("meow"));
  },
  purr : function(times) {
    console.log(Array(times+1).join("purr"));
  },
  snore : function(times) {
    console.log(Array(times+1).join("zzz"));
  }
};
cat.meow(3);
cat.purr(4);
cat.snore(5);
```
