## Create functions inside a function

- Functions are object.
- so we can create an object inside a function same way we can create a function object inside a function and it has block level scope.

```js
function sumUp(...numbers){
let validateNumbers = (number)=>{
 return isNaN(number) ? 0 : number;
};
let sum = 0;
for(let num of numbers){
    sum += validateNumbers(num);
}
return sum;
}

sumUp(1,2,3,4,5);      //15
sumUp(1,2,3,4,'abc')   //10
```

- Here function sumUp is declared gloablly.
- function validateNumbers is declared inside sumUp function .