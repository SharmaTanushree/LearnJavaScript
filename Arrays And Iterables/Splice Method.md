## Splice Method

> Splice is used to add as well as remove elements from an array.
> 
> *array.splice(index,number of elements to remove, elements to add)*
>
> splice returns the array of elements that are removed from the array.
>
> splice modifies the orignal array.

```js
let arr = [1,2,4,5];
let res  = arr.splice(0,0,0);
console.log(arr);  //(5) [0, 1, 2, 4, 5]
console.log(res);  //[]

let arr = [1,2,6,7];
let res = arr.splice(2,0,3,4,5);
console.log(arr);  //(7) [1, 2, 3, 4, 5, 6, 7]
console.log(res);  //[]

let arr = [1,2,3,4,5,6,7];
let res = arr.splice(2,2);
console.log(arr);  //(5) [1, 2, 5, 6, 7]
console.log(res);  //(2) [3, 4]

let arr = [1,2,3,4,5,6,7];
let res = arr.splice(2,2,3,4,5);
console.log(arr); //(8) [1, 2, 3, 4, 5, 5, 6, 7]
console.log(res); //(2) [3, 4]
```

