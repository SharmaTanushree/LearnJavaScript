## sorting and reverse

```js
let arr = [7,10,14,22,4];
let sorted_array = arr.sort();   //(5) [10, 14, 22, 4, 7]

let sorted_array = arr.sort((a,b)=>{
    if(a>b) return 1;
    else if (a == b) return 0;
    else return -1;
});     //(5) [4, 7, 10, 14, 22]

let sorted_array_reverse = arr.sort((a,b)=>{
    if(a>b) return -1;
    else if (a == b) return 0;
    else return 1;
});   //(5) [22, 14, 10, 7, 4]

//alternatively we can also use reverse on sorted_array

let sorted_array_reverse = sorted_array.reverse();  //(5) [22, 14, 10, 7, 4]
```

