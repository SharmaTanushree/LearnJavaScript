 ## How Spread Operator works with object.

  - spread (...) opeartor gives all the key values of the object on which it is used.
  
  ```js
  let person = {
    name  : 'george',
    age : 52,
    hobbies : ['singing', 'trekking']
  };

  let person2 = {...person};
  console.log(person2);

  /*
  {name: 'george', age: 52, hobbies: Array(2)}
   age: 52
   hobbies: (2) ['singing', 'trekking']
   name: "george
  */

  person.age = 21;
  console.log(person);   //{name: 'george', age: 21, hobbies: Array(2)}
  console.log(person2);  //{name: 'george', age: 52, hobbies: Array(2)}

  person.hobbies.push('Reading');
  console.log(person);
  /*
  {name: 'george', age: 21, hobbies: Array(3)}
  age: 21
  hobbies: (3) ['singing', 'trekking', 'Reading']
  name: "george  
  */

  console.log(person2);
  /*
  {name: 'george', age: 52, hobbies: Array(3)}
  age: 52
  hobbies: (3) ['singing', 'trekking', 'Reading']
  name: "george"
  */
   


  //since hobbies is of refernce type , its address will be coppied in person2. In order to get only elements of hobbies we need to deep clone the object.

  let person3 = {...person, age : 19, hobbies :[...person.hobbies]};
  
  person.hobbies.pop();
  console.log(person);
  /*
  {name: 'george', age: 21, hobbies: Array(2)}
  age: 21
  hobbies: (2) ['singing', 'trekking']
  name: "george"
  */
  console.log(person2);
  /*
  {name: 'george', age: 52, hobbies: Array(2)}
   age: 52
   hobbies: (2) ['singing', 'trekking']
   name: "george"
  */

  console.log(person3);
  /*
  {name: 'george', age: 19, hobbies: Array(3)}
  age: 19
  hobbies: (3) ['singing', 'trekking', 'Reading']
  name: "george"
  */

  ```