const ul = document.querySelector('ul');
let ul_children = ul.children;   //children returns element nodes that are in side ul element.
let ul_childNodes = ul.childNodes;  //childNodes returns element nodes as well as text nodes  that are in side ul element.

//get the first child element of ul

let first_child = document.querySelector('li:first-of-type');
let last_child = document.querySelector('li:last-of-type');

//The above mentioned way will make browser search entire html first then stylesheet to find the elements.
// The better approach would be to use the existing ul element.

let first_childElement =  ul.firstElementChild;
let last_childElement = ul.lastElementChild;

// get the odd elements of ul

let oddElements = document.querySelectorAll('li:nth-child(odd)');  


// get the odd elements of ul

let evenElements = document.querySelectorAll('li:nth-child(even)');


//traversing to parents/ancestors

//An element can have multiple childs but can have single parent.
//parentNode and parentElement property returns parent of the element.

let ui_immediateParent = ul.parentNode; // returns body
let ui_immediateParenta = ul.parentElement;   // returns body

//There is no such difference between parent node and parent Element . Both returns an element node  as text node can't have nested elements within.
// The only difference they show is:
// document.documentElement.parentNode       //document
// document.documentElement.parentElement    //null  

//closest returns ancestor element.

let ancestor = ul.closest('body');   //returns body
let non_ancestor= ul.closest('header');   //returns null as header is not ancestor of ul.

//traversing to previous sibling elements

let prev_siblingNode = ul.previousSibling;    //text node
let prev_parentSiblingNode = ul.parentElement.previousSibling;  //text node
let prev_parentSiblingElement = ul.parentElement.previousElementSibling;  //head

let next_siblingNode = ul.nextSibling;    //text node
let next_parentSiblingNode = ul.parentElement.nextSibling;  //null
let next_parentSiblingElement = ul.parentElement.nextElementSibling;  //null


//Styling DOM Elements
/**
 * 1. by using style property.
 * 2. by className
 * 3. by classList
 */
//Styles applied to elements through java script is inline styles. inline styles in css has top most priority.
let section =  document.querySelector('section');
//section.style.backgroundColor = 'pink';

section.className = "bg-red";


let button =  document.querySelector('button');

// button.addEventListener('click',()=>{
//     console.log('clicked!')
// if(section.className === 'bg-red visible'){
//     section.className = 'bg-red invisible';
// }
// else{
//     section.className = 'bg-red visible';
// }
// })


button.addEventListener('click',()=>{
    section.classList.toggle('invisible')
})






