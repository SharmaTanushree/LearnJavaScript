## Object Destructuring

```js
let person = {
    name : 'John',
    age  : 54,
    profession : 'Teacher',
    Address : '104, green Park'
};

let {name} = person;
console.log(name);  // John

/*
let {key} = object  // here key should be present in the object. 
*/

let {name : userName} = person;
console.log(name);          //undefined
console.log(userName);      //John

/*
let {key : alias} = object // instead of key if you want to give some other name(alias) to the variable holding the value of key then use this syntax.
The variable can be accessed by the alias.
*/

let {name, ...userDetails} = person;
console.log(name);   //John
console.log(userDetails);  //{age: 54, profession: 'Teacher', Address: '104, green Park'}

```