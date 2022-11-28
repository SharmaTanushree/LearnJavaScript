## Map

- stores key - value data of any kind and length.
- any key values are allowed.
- It is iterable and special methods work for maps.
- Order is guaranteed.Duplicates are not allowed.
- elements have key based access

```js

let person1 = {name : 'John'};
let person2 = {name : 'Jack'}

let map =  new Map([[person1,[{price :20, day: 'yesterday'}]]]);
map.get(person1);  //0: {price: 20, day: 'yesterday'}

map.set(person2,[{price :30, day:'today'}])
for(const item of map.entries()){
    console.log(item);
}

//returns array of 2 elements key and value.
```