## Event Propagation

- If an event is triggered, the browser listens it on target element from where the event occurs  and also goes to all its ancestors and checks for event listeners on them and if it founds event listeners then executes them.

- It means that the event does not occurs only on the target element itself but also on all the ancestor elements. This is called Event Propagation.

- We can stop the event propagation using _targetEvent.stopPropagation_ method.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js" defer></script>
</head>
<body>
   <section>
    <div>
        <button> Click Me</button>
    </div>
   </section> 
</body>
</html>
```
we will refer above html through out the example.

```js
    let section = document.querySelector('section');
    let div = document.querySelector('div');
    let btn = document.querySelector('button');

    section.addEventListener('click',(event)=>{
        console.log('Section is clicked');
    });

    div.addEventListener('click',(event)=>{
        console.log('Div is clicked')
    });

    btn.addEventListener('click',(event)=>{
        event.stopPropagation();
        console.log('Button is clicked');
    },true);

/*
/* on clicking the button the console statements will be printed as:
Button is clicked 
*/
*/    
```
>If we have more than one eventlisteners added to an element and we want to stop execution of all eventlisteners we can use _targetEvent.stopImmediatePropagation_.

```js
let section = document.querySelector('section');
    let div = document.querySelector('div');
    let btn = document.querySelector('button');

    section.addEventListener('click',(event)=>{
        console.log('Section is clicked');
    });

    div.addEventListener('click',(event)=>{
        console.log('Div is clicked')
    });

    btn.addEventListener('click',(event)=>{
        event.stopImmediatePropagation();
        console.log('first listener to button click');
    },true);

    btn.addEventListener('click',()=>{
        console.log('second listener to button click');
    });

 /* on clicking the button the console statements will be printed as:
first listener to button click
*/   
```
