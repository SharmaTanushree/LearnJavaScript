## reduce

```js
let arr = [1,2,3,4,5];
let arr_reduce =  arr.reduce((prevValue,currentValue,currentIdx, array)=>{
    return prevValue + currentValue
},0);
console.log(arr_reduce);  //15
```