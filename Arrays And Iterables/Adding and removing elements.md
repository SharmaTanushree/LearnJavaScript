## Adding and Removing elements from an array

- Adding Elements to array

1. Add element at the end of the array 
```js
let arr = ['eat','sleep'];
arr.push('exercise');  //push adds the element at the end of the array and returns length of array
console.log(arr); //(3) ['eat', 'sleep', 'exercise']

arr.push('study', 'play'); //5
console.log(arr) //(5) ['eat', 'sleep', 'exercise', 'study', 'play']

```

2. Add element at the start of the array 
```js
let arr = ['eat','sleep'];
arr.unshift('exercise'); //unshift adds the element at the beginning of the array and returns length of array
console.log(arr); //(3) ['exercise', 'eat', 'sleep']

arr.unshift('yoga','wakeup')  //5
console.log(arr);  //(5) ['yoga', 'wakeup', 'exercise', 'eat', 'sleep']

```

- Remove Elements from array

1. Remove element from  end of the array 
```js
let arr = ['eat','sleep','exercise'];
arr.pop();  //it removes the element from the end of the array and returns it .  here it retuned 'exercise'
console.log(arr); //(2) ['eat', 'sleep']
```

2. Remove element from start of the array 
```js
let arr = ['eat','sleep','exercise'];
arr.shift(); //it removes the element from the beginning of the array and returns it . here it retuned 'eat'
console.log(arr);  //(2) ['sleep', 'exercise']
```
