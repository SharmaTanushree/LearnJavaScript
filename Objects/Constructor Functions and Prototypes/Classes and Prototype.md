## class and prototype

```js
function Person(){
    this.name = 'John';
    this.age = 30;
    this.greet = function(){
        alert(`Age of ${this.name} is ${this.age}`);
    }
}

person = new Person();
```
- If we look in to person object created from constructor function, it has age, greet, name and [[Prototype]] properties.
and the [[Prototype]] has constructor and [[Prototype]] .


```js

  class Person  {
    name = 'John';

    constructor(){
        this.age =30;
    }

    greet(){
       alert(`Age of ${this.name} is ${this.age}`);
    }
    }
    person = new Person();
```
- If we look in to person object created from class, it has age, name and [[Prototype]] properties.
and the [[Prototype]] has constructor, greet and [[Prototype]] .

- In the code snippet 1, where object is created using constructor function, greet is part of object and hence function will be created for every instance of Person.
  
- In the code snippet 2, where object is created using class, greet is part of prototype, hence it won't be recreated for each and every instance instead it will be available in Person prototype.
  ```js
  person2 = new Person();
  person.__proto__ === person2.__proto__; //true

  /*here person.__proto and person2.__proto__ is pointing to exactly same object.*/
  ```

  > whether a function defined in classs will be part of object itself or prototype depends on how the function is declared.

   ```js
   class Person  {
    name = 'John';

    constructor(){
        this.age =30;
    }

    greet=function(){
       alert(`Age of ${this.name} is ${this.age}`);
    }
    }
    person = new Person();
    ```
- In the above code snippet, the function greet will be part of object and will be created for all instance of Person.

   ```js
   class Person  {
    name = 'John';

    constructor(){
        this.age =30;
    }

    greet=()=>{
       alert(`Age of ${this.name} is ${this.age}`);
    }
    }
    person = new Person();
    person.greet();  //Age of john is 30
    ```
- In the above code snippet, the function greet will be part of object and will be created for all instance of Person.
