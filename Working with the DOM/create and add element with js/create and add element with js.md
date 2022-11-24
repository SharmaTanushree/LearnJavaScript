## Create and add elements with JS

-There are two ways of creating/adding elements:
1. HTML string
    1. innerHTML  : it adds / renders html string.
    2. insertAdjacentHTML()   : it adds html string in specific location.
2. createElement()
    1. appendChild()  or append()  : it adds new dom elements/nodes.
    2. prepend() , before(), after(), insertBefore() : inserts new dom elements/ nodes in specific position
    3. replaceChild(), replaceWith()  : replace existing dom element /nodes with new one.

1.2 insertAdjacentHTML
- html can be inserted in addition to existing one using insertAdjacentHTML(position, text).
- position can hold one of the four values:
     1. 'beforebegin'  : before the target element.
     2. 'afterbegin'   : just inside the target element before it's first child.
     3. 'beforeend'    : just inside the target element after it's last child.
     4. 'afterend'     : after the target element.
   
- 'beforebegin' and 'after end' position is Only valid if the element is in the DOM tree and has a parent element.