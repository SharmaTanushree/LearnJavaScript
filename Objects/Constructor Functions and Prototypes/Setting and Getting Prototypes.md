## Setting and Getting prototypes
 ```js
   let course = {
    name : 'Complete Web Development',
    rating  :5
   };

   console.log(Object.getPrototypeOf(course));
```
- Although we can get prototype (fallback) of an object using `__proto__`but this is more advisable way .
- If we are creating an Object from a predefined constructor function and want to add some property to its prototype then we can achieve it using set method.

  ```js
  let student = {
    name : 'John',
    age : 15
  };

  student.printAge();  //student.printAge is not a function
  
  ``` 
- In the above code snippet, printAge function is neither defined in the object nor in the prototype of student.
We can add the printAge function in the prototype of student.

```js
  let student = {
    name : 'John',
    age : 15
  };
  Object.setPrototypeOf(student,{...Object.getPrototypeOf(student),
  printAge : function(){
    console.log(`Age is ${this.age}`);
  }
  })
  student.printAge();  //Age is 15
  
  ``` 

- In the above code snippet, we have added the printAge function in the prototype of student object.
  
- There is one more way to create object.
```js
const student = Object.create({printAge : function(){
    console.log(`Age is ${this.age}`)
}})
// An empty object is created with a method printAge in its prototype.
// We can define properties in this object using '.' notation.
student.name = 'John';
// we can also define properties of an object using Object.defineProperty.
Object.defineProperty(student,'age',{
    configurable : true,
    enumerable : true,
    value :15,
    writable : false
});
student.printAge();  //Age is 15
```

- We can also pass second parameter to Object.create()
```js
let student = Object.create({printAge : function(){
  console.log(`Age is ${this.age}`);
}},{
age : {
    configurable: true,
    enumerable : true,
    value : 15,
    writable : false
}
});

student.printAge();  //Age is 15
```

