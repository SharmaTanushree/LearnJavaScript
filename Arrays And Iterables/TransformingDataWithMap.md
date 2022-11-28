 ## Transforming data with map.

 - map is used when we want to perform certain opertion on each element of an array.
 - like for-each , we do not need to maintain an external array
 - map, performs operation on each element and return the modified element.
 - map doesn't modifies the existing array. It returns a new array.

```js
let fee = [120,112,123,145];
let revisedCharge = 100;
let new_fee = fee.map((fee, idx, fees)=>{
    return {index : idx, fee : fee+revisedCharge}
});
/*
(4) [{…}, {…}, {…}, {…}]
0: {index: 0, fee: 220}
1: {index: 1, fee: 212}
2: {index: 2, fee: 223}
3: {index: 3, fee: 245}
*/
```