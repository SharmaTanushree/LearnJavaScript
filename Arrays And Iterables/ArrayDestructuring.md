## Array Destructuring

```js
let arr = ['Maxmillan','Socher'];
const [firstName, lastName ] = arr;
console.log(firstName, lastName);

let arr = ['Maxmillan','socher','303','ShastriNagar'];
const [firstName, lastName, ...address] = arr;
console.log(firstName, lastName, address);

```