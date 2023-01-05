let listElement =  document.querySelector('li');
listElement.remove();
// first list item is removed.

listElement.parentElement.removeChild(listElement);
// first list item is removed.