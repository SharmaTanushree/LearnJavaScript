## Pure Functions and Side Effects

- A function which outputs similar value if a given value is input for several time is called pure function.
  
```js
function add(a,b){
    return a+b;
}
add(2,5)  //7
```

- In the above code, if you call add and pass the same arguments again and again, it wil return same output.
  
- A pure function has no side effects.i,e it doesn't modifies any variable declared outside the function.
  The function written in above code has no side effect.

```js
let sum = 0;
function add(a,b){
    sum = a+b;
    return sum;
}

// The above function is not pure function as it has side effects.
```