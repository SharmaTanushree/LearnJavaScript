## This

- this refers to whatever calls that function i.e, caller of the function.
- *caller.function()*  entity before dot is the caller object.

```js
let person = {
    uid: 54,
    FirstName : 'Albert',
    address : '204, Augusta Street',

    printBadge(){
        console.log(`${this.FirstName} - Chairman`);
    }
}

let printBadge = person.printBadge;
printBadge();   //undefined -Chairman
/*
In line no. 17 printBadge is not called by any object . so by default the caller of this function is global window object and FirstName property doesn't exist in window object, hence FirstName is undefined.
*/
person.printBadge();   //Albert - Chairman

/*
In line no. 21 printBadge is called by person object and it has firstName property.
*/
```
- we can use to bind to set the context for the function.Bind just prepares the function .it doesn't executes it.
```js
let person = {
    uid: 54,
    FirstName : 'Albert',
    address : '204, Augusta Street',

    printBadge(){
        console.log(`${this.FirstName} - Chairman`);
    }
}

let printBadge = person.printBadge.bind(person);
printBadge();  //Albert - Chairman
```

- we can also use call to set caller of the function. Call immediately executes the function.

```js
let person = {
    uid: 54,
    FirstName : 'Albert',
    address : '204, Augusta Street',

    printBadge(){
        console.log(`${this.FirstName} - Chairman`);
    }
}

person.printBadge.call(person);  //Albert - Chairman
```
-we can also use apply to set caller of the function. apply immediately executes the function.

```js
let person = {
    uid: 54,
    FirstName : 'Albert',
    address : '204, Augusta Street',

    printBadge(){
        console.log(`${this.FirstName} - Chairman`);
    }
}

person.printBadge.apply(person);  //Albert - Chairman
```

- Difference between call and apply 
  1.  apply accepts two parameters - context and array of arguments for the function to call.
  2.  call accepts multiple parameters -  first one is context and rest are arguments for the function to call.

- The browser binds 'this' for you(on event listeners) to the DOM element that triggered the event.
  