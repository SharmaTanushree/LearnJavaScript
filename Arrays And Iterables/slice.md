## Slice

- Slice is used when we want to get more than one elements of an array.

- *slice(?start,?end)*

- Accessing array elements through index returns a single value.

- slice do not modify the orignal array.

```js
let arr = [1,2,3,4,5,6];
let slicedArray = arr.slice(2,5);
console.log(arr); //(6) [1, 2, 3, 4, 5, 6]
console.log(slicedArray);  //(3) [3, 4, 5]

let arr = [1,2,3,4,5,6];
let slicedArray =  arr.slice(-4,1);
console.log(arr);  //(6) [1, 2, 3, 4, 5, 6]
console.log(slicedArray);  //[]

let arr = [1,2,3,4,5,6];
let slicedArray = arr.slice(-4,-2);
console.log(arr);  // (6) [1, 2, 3, 4, 5, 6]
console.log(slicedArray); //(2) [3, 4]

let arr = [1,2,3,4,5,6];
let slicedArray =  arr.slice(-4,5);
console.log(arr); //(6) [1, 2, 3, 4, 5, 6]
console.log(slicedArray); //(3) [3, 4, 5]
```