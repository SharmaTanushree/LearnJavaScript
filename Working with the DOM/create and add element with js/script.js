let section = document.querySelector('section');
//section.textContent = 'have changed the text content';    // with change the entire decendants element with text node.

//section.innerHTML = '<h1>added a new h1 element</h1>'  // replacing the element inside the section.

//Append element to existing one.

let list = document.querySelector('ul');
//list.innerHTML = list.innerHTML + '<li>Guava</li>' ;

// in the above code list will again parse all elements inside list and rerender the old plus this new element.

let div = document.querySelector('div');
// div.innerHTML = div.innerHTML + '<p>Oopsy! something went wrong</p>' ;

// in the above code if we append the element to an input element, the input enetered by the user will be lost.
// line(14) makes the content inside the div to re render setting input to its default value

// So a better approach would be to use insertAdjacentElement(position , text)
div.insertAdjacentHTML('beforeend','<p>Oopsy! something went wrong</p>')
// line(20) doesn't makes the content inside the div to re render thereby just appending the html string at specified position.


/* Using the above mentioned ways one can insert / create html element.
but in order to style or set its attributes it has to be queried again.Here we can go for createElement()
that creates element in dom and we can work on that element.
*/


let newItem = document.createElement('li');
newItem.textContent  = 'Item 4';

list.appendChild(newItem);   //new list item gets added to the existing list.


// there is one more method append that inserts text node as well as element node to the target dom element.
//list.append("list 5")  //a text node gets inserted inside ul at the end.
//list.append("item 6","item 7", "item 8")  //all the arguments gets inserted as text nodes inside list object at the end

//insert element at the beginning of the list
list.prepend(newItem);


//insert the element before the last element
list.lastElementChild.before(newItem);

//insert the element after the last element
list.lastElementChild.after(newItem);

//replace first item with new element
//list.firstElementChild.replaceWith(newItem);


//insert the new element after second list item
let secondItem = list.children[1];
//secondItem.after(newItem);

//since before and after are not supported by few browsers its better to use insertAdjacentElement method.
secondItem.insertAdjacentElement('afterend',newItem);






