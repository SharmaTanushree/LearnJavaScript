## Introducing Prototypes

- Prototype is the default property of the object.(function is also an object).It is a connected object which is used as a fallback. 
```js
function Person(){
    this.name = 'John';
    this.age = 30;
    this.greet = function(){
        alert(`Age of ${this.name} is ${this.age}`);
    }
}

let person = new Person();
console.log(person.toString());  //[object Object]

console.log(person.__proto__);  
/*constructor: ƒ Person()
[[Prototype]]: Object
*/
```

If we create an object using constructor function or class, and we are trying to access certain property of that object, then JS first looks for the property in the constructor function or class, if its there it executes it and if not found then it looks the property in the object's prototype, if found JS executes it otherwise further look in to Object's prototype's prototype and it looks till Object.prototype and if the property is still not found it returns undefined.


```js
function Person(){
    this.name = 'John';
    this.age = 30;
    this.greet = function(){
        alert(`Age of ${this.name} is ${this.age}`);
    }
}

let person = new Person();
person.__proto__ ==Person.prototype //true
```

- If you console.dir(Person), you'll find it has both [[Prototype]] and prototype.
- [[Prototype]] is the fallback object for constructor function.
- prototype sets the [[prototype]] of the object that are created using this constructor function.
- hence, Person.prototype == person.__proto__

```js
function Person(){
    this.name = 'John';
    this.age = 30;
    this.greet = function(){
        alert(`Age of ${this.name} is ${this.age}`);
    }
}
Person.prototype ={
    printAge(){
        console.log(`Age is ${this.age}`);
    }
} 

let person = new Person();
console.log(person.__proto__);  //{printAge: ƒ}
person.printAge();  //Age is 30
```

- In the above code why the __proto__ doesn't have constructor function Person?
  >It is because we have overwritten the prototype property of Person.. Instead we could have added the new method to the existing prototype.

```js
function Person(){
    this.name = 'John';
    this.age = 30;
    this.greet = function(){
        alert(`Age of ${this.name} is ${this.age}`);
    }
}
Person.prototype.printAge=function(){
        console.log(`Age is ${this.age}`);
    };


let person = new Person();
console.log(person.__proto__);  //{printAge: ƒ}
person.printAge();  //Age is 30
```

- If we use class and inherits a base class, then JS will first create object based on base class and the prototype of the base class will set fallback object of the child class.
  
  ```js
  class OldPerson{
    printAge(){
        console.log(`Age is ${this.age}`); 
    }
  }
  class Person extends OldPerson{
    name = 'John';

    constructor(){
        super();
        this.age =30;
    }

    greet(){
       alert(`Age of ${this.name} is ${this.age}`);
    }
    }
    person = new Person();
    person.greet();
    console.dir(person);
    /*[[Prototype]]: OldPerson
    constructor: class Person
    greet: ƒ greet()
    [[Prototype]]: Object
    >constructor: class OldPerson
    printAge: ƒ printAge()
    [[Prototype]]: Object
    */
  ```
- The default prototype of all constructor function is the prototype of global Object constructor function.
- Object is a consructor function with bunch of properties and methods which if equivalent to static methods and properties in a class.
- So we can use properties and methods of Object constructor function without instantiating it.
- The fallback value of all objects is Object.prototype.
- prototype chain ends at Object.prototype.