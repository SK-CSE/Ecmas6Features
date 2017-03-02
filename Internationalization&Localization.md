### ECMAScript 6
```js
var newDate = new Intl.DateTimeFormat("en-US")
console.log(newDate.format(new Date())) // 3/2/2017

var curUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
var curGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
var curEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })

console.log(curUSD.format(100000000.50)) // $100,000,000.50
console.log(curGBP.format(100000000.50)) // £100,000,000.50
console.log(curEUR.format(100000000.50)) // €100,000,000.50
```
