## Creating Arrays

- using square bracket
```js
let arr = [1,2,3];
console.log(arr);    //(3)[1,2,3]
```

- using Array constructor with new keyword
```js
let  arr = new Array(5,4,3);
console.log(arr)    //(3)[5,4,3]

let arr = new Array(5);
console.log(arr)   //(5)[empty * 5]
// if we pass single argument to Array constructor then it acts like array length.
```

- using Array method
```js
let  arr = Array(5,4,3);
console.log(arr)    //(3)[5,4,3]

let arr =  Array(5);
console.log(arr)   //(5)[empty * 5]
// if we pass single argument to Array constructor then it acts like array length.
```

- using Array.of() method
```js
let  arr = Array.of(5,4,3);
console.log(arr) //(3)[5,4,3]

let arr =  Array.of(5);
console.log(arr)   //[5]
```

- using Array.from() method
- Array.from() is used to convert an iterable or array-like object to array.
```js
let arr = Array.from("Hey!");
console.log(arr);  //(4) ['H', 'e', 'y', '!']
```

