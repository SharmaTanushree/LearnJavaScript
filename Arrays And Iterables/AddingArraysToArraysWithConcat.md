## Add arrays to arrays

> concat adds an array at the end of another array and returns a new array.

```js
let arr = [1,2,3,4];
let arr1 = [5,6,7];
let concat_array = arr.concat(arr1);
console.log(arr);  //(4) [1, 2, 3, 4]
console.log(arr1);  //(3) [5, 6, 7]
console.log(concat_array);  //(7) [1, 2, 3, 4, 5, 6, 7]
```