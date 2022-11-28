## Retrieving index with indexOf and lastIndexOf

- indexOf returns the index of first occurence of the value that is being searched.

- lastIndexOf returns the index of last occurence of the value that is being searched.

- Both indexOf and lastIndexOf accepts two parameters -  the value to be searched and index from which search must be done.

- *array.indexOf(searchElement, ?fromIndex)*   // returns -1 if search element not found.

- *array.lastIndexOf(searchElement, ?fromIndex)*  //returns -1 if search element not found.

```js
let arr = [1,2,3,4,5,6];
let searchIndex = arr.indexOf(3); //2

let arr = [1,2,3,4,5,3,6,3];
let firstIndex = arr.indexOf(3);  //2
let lastIndex = arr.lastIndexOf(3);  //7
let firstIndex_searchFrom2Index = arr.indexOf(3,2);  //2
let firstIndex_searchFrom3Index = arr.indexOf(3,3);  //5
let lastIndex_searchFrom2Index = arr.lastIndexOf(3,2);   //2
let lastIndex_searchFrom5Index = arr.lastIndexOf(3,5);  //3    
//lastIndexOf searches from "fromIndex" towards it's right

let arr = ['ram', 'riya', 'raj'];
arr.indexOf('riya');  //1


let arr = [{name: 'John'},{name : 'cherry'}];
let firstIndex = arr.indexOf({name:'john'}); //-1    //indexOf and lastIndexOf works only on primitives not on refernce type elements.
```
