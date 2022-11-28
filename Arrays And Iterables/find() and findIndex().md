## find() and findIndex()

-  find and findIndex methods are used to find element and index of reference type elements respectively.
-  find accepts a comparator function and returns the element to be searched.
 

```js
let arr = [{name : 'Peter'}, {name : 'John'},{name : 'Jack'}];
let findElem = arr.find((elem, idx, array)=>{
   return elem.name == 'John';
});
console.log(findElem);   //{name: 'John'} it returns the orignal object.it does not returns the copy of the object.
findElem.name = 'Jazz';

console.log(findElem);  //{name: 'Jazz'}
console.log(arr);      
/*(3) [{…}, {…}, {…}]
0: {name: 'Peter'}
1: {name: 'Jazz'}
2: {name: 'Jack'}
*/
// the object returned by find is orignal object , the reference hence any change made in findElem is in orignal object.
```
-  findIndex accepts a comparator function and returns the index of the element to be searched.
```js
let find_Index = arr.findIndex((elem, idx, array)=>{
  return elem.name == 'Jazz';
})

console.log(find_Index);  //1
```

