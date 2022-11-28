## forEach method 

- like for-of loop, forEach method is used to iterate over iterables.
- in for-of loop ,only element can be accessed.
- using forEach index of the element is also accessible.

```js
let fee = [1200,1300,999,760];
let tax = 100;
let updatedFee =[];
fee.forEach((fee, idx, fees)=>{
    const feeObj = {index : idx, fee: fee+tax}
    updatedFee.push(feeObj);
})
console.log(updatedFee);
/*
(4) [{…}, {…}, {…}, {…}]
0: {index: 0, fee: 1300}
1: {index: 1, fee: 1400}
2: {index: 2, fee: 1099}
3: {index: 3, fee: 860}
*/
```