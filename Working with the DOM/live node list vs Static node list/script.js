let list = document.querySelector('ul');
let  liList1 = document.querySelectorAll('li');
let  lilist2 = list.getElementsByTagName('li');

let newItem = document.createElement('li');
newItem.textContent = 'Item4';
list.append(newItem);

console.log(liList1);  //lilist1 shows three elements
console.log(lilist2);  //lilist2 shows four elements.

/**
 * here list obtained by query selector is static list .query selector takes  snapshot of the dom and returns the result.
 * list obtained by getElementBy methods is live list .
 * live list get upates whereas static doesn't.
 * In the static list references are live. the li elements exist in the dom and property of existing element can be changed.
 */