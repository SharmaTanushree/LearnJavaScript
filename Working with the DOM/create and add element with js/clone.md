## Cloning DOM nodes
-  clone is used to make copy of an element.
-  element created by createElement() are of reference type.
- syntax: node.cloneNode(deep?)
```js
const list = document.querySelector('ul');
let newElement1 = document.createElement('li');
newElement1.textContent = 'new element';
let cloneElement = newElement1.cloneNode(true);
list.append(newElement1, cloneElement);

// Two list items with text-content 'new element' will be appended to the list
```  

