## Spread Operator (...)

- Spread operator pulls out the value from an array and provides the comma seperated list.
  
```js
let arr = ['Apple','banana','orange'];
let arr_fragments = [...arr];
arr.push('guava');  
console.log(arr);            //(4) ['Apple', 'banana', 'orange', 'guava']
console.log(arr_fragments);  //(3) ['Apple', 'banana', 'orange']

let arr =[1,2,3,67,22,0,-1,-3];
Math.min(arr)   //NaN
Math.min(...arr)  //-3


let workers = [{name :'Ana', age:24},{name:'Vijay',age:56}];
let workers_fragments = [...workers];
workers.push({name : 'sam', age:33});
console.log(workers);
/**
 (3) [{…}, {…}, {…}]
0: {name: 'Ana', age: 24}
1: {name: 'Vijay', age: 56}
2: {name: 'sam', age: 33} 
*/
console.log(workers_fragments);
/*(2) [{…}, {…}]
0: {name: 'Ana', age: 24}
1: {name: 'Vijay', age: 56}
*/
workers[0].age = 21;
console.log(workers);
/*
(3) [{…}, {…}, {…}]
0: {name: 'Ana', age: 21}
1: {name: 'Vijay', age: 56}
2: {name: 'sam', age: 33}
*/
console.log(workers_fragments);
/*
(2) [{…}, {…}]
0: {name: 'Ana', age: 21}
1: {name: 'Vijay', age: 56}
*/


let workers = [{name :'Ana', age:24},{name:'Vijay',age:56}];
let workers_fragments = [...workers].map((worker,idx,workers)=>{
    return {name: worker.name , age : worker.age};
});

workers[0].age =17;
console.log(workers);  
/*(2) [{…}, {…}]
0: {name: 'Ana', age: 17}
1: {name: 'Vijay', age: 56}
*/
console.log(workers_fragments);
/*
(2) [{…}, {…}]
0: {name: 'Ana', age: 24}
1: {name: 'Vijay', age: 56}
*/


```