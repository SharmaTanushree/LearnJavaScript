##Constructor Function vs class

```js
class Person{
    name = 'John';

    constructor(){
        this.age =30;
    }

    greet(){
       alert(`Age of ${this.name} is ${this.age}`);
    }

}

person = new Person();
person.greet();  //Age of john is 30
```

```js
function Person(){
    this.name = 'John';
    this.age = 30;
    this.greet = function(){
        alert(`Age of ${this.name} is ${this.age}`);
    }
}

person = new Person();
person.greet(); //Age of john is 30
```

- Both class and constructor function are used to create blueprints of an object and includes properties and methods for the object.

> What if you call constructor Person function without new keyword?
> <br>
> The function Person won't return anything. And if you use person.greet(), it will throw error as you are trying to call method of an undefined object.

```js
//What new keyword does?
function Person(){
    this={};  // it creates an empty object
    this.name = 'John';  //assign properties and method to that object
    this.age = 30;
    this.greet = function(){
        alert(`Age of ${this.name} is ${this.age}`);
    }
    return this; // returns the object.
}

person = new Person();
person.greet(); //Age of john is 30
```