# var, let and const keywords

## var

> we can re-declare a variable using var

```js
var userName = 'Max';
var userName = 'John';
```

> __Scope of var__

- variable declared using var has function and global scope.

```js
function printName(uName){
    var userName = uName; 
    console.log('inside function',userName);
}
printName('John');

// The variable (userName) decalred inside printName function can not be accessed outside the function.
console.log('outside function',userName);

// Output: 
// inside function John
// ReferenceError: userName is not defined
```

- variable declared using var inside a block is also accessible outside the block

```js
function printName(uName){
    var userName = uName;
    if(!userName){
        var userName = 'Max'
    }

    // The variable (userName) decalred inside if-block can be accessed outside the block.   
    console.log('inside function and outside block',userName);
}
printName();
// The variable (userName) decalred inside printName function can not be accessed outside the function.
console.log('outside function',userName);

// Output:
// inside function and outside block Max
// Uncaught ReferenceError: userName is not  defined 
```
---

## let 

> we can not redeclare a variable using let in similar scope.

```js
let userName = 'Max';
let userName = 'John'; 
//error - redeclaration of let name
```

> Scope of let

- let creates a block level variable.

```js
if (true) {
    let userName = 'Max';
    console.log(`inside block - ${userName}`);
}
// The variable (userName) decalred inside if-block can not be accessed outside the block.
console.log(`outside block - ${userName}`);

// Output:
// inside block - Max
// Uncaught ReferenceError: userName is not defined
```

---

## const 

> we can not redeclare a variable using const in similar scope.

```js
const userName = 'Max';
const userName = 'Sam'
//Identifier 'name' has already been declared
```
> Scope of const

- creates a block level constant.

```js
if (true) {
    const userName = 'Max';
    console.log(`inside block - ${userName}`);
}
// The constant (userName) decalred inside if-block can not be accessed outside the block.
console.log(`outside block - ${userName}`);

// Output:
// inside block - Max
// Uncaught ReferenceError: userName is not defined
```

> you can not reassign values to a const otherwise it will throw type error

```js
const userName = 'Max';
userName = 'Sam';
//TypeError: Assignment to constant variable.
```