## How to check if a property exists in an object?


```js
let person = {
    name : 'John',
    age  : 54,
    profession : 'Teacher',
    Address : '104, green Park'
};

if(!(person.age === undefined)) console.log('property Exists');
else console.log('property does not exists');
//property Exists


if('age' in person) console.log('property Exists');
else console.log('property does not exists');
//property Exists

person.age = undefined;

if(!(person.age === undefined)) console.log('property Exists');
else console.log('property does not exists');
//property does not exists

if('age' in person) console.log('property Exists');
else console.log('property does not exists');
//property Exists

delete person.age
if('age' in person) console.log('property Exists');
else console.log('property does not exists');
//property does not exists

```