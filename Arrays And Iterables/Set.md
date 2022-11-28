## Sets

- stores (nested) data of any kind and length.
- Sets are iterable.
- Therse are special methods for sets.Array methods are not implicable
- Order of elements is not guaranteed.
- Duplicates are not allowed.
- No index based access.
  

  ```js
  let set = new Set([1,2,3,4]);
  set.has(2);   //true

  set.add(7); // Set(5) {1, 2, 3, 4, 7}

  if(set.has(2)){
    set.delete(2)
  }

  console.log(set);   //Set(4) {1, 3, 4, 7}

  for(let item of set.entries()){
    console.log(item)
  }

  /*
   [1,1]
   [3,3]
   [4,4]
   [7,7]
  */
  
  ```