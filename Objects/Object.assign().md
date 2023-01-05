## Object.assign()

- Object is a globally available object and it supports assign method.
- It is used to copy properties of an object to another object.
- *Object.assign(targetObject,...sourceObjects)*

```js
let person = {
    id : 101,
    name : 'John'
}

let customer = {
    membership : 'Gold',
    credPoints : 54
}

let user = Object.assign({},person,customer);

console.log(user)  //{id: 101, name: 'John', membership: 'Gold', credPoints: 54}

Object.assign(customer,person);  //{membership: 'Gold', credPoints: 54, id: 101, name: 'John'}

```