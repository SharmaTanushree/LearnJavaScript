## Filtering array with filter
```js
let prices = [3.33, 5.45,12.2,13.5,8];

let filtered_price =  prices.filter((price, idx, prices)=>price > 7)

console.log(filtered_price)   //(3) [12.2, 13.5, 8]
```