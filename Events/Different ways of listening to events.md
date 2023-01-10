 ## Different ways of listing to event.

 ```html
 <html>
 <head>
   <script>
    function printDetails(){
      console.log('details logged.');
    }
   </script>
 </head>
 <body>
    <button onClick="printDetails()"></button>
</body>
</html>
 ```

 > instead of using onClick attribute on button element we could have added this method to button click in js.
 
 ```html
 <html>
 <head>
   <script>
    function printDetails(){
      console.log('details logged.');
    }

    const btn = document.querySelector('button');
    btn.onClick = printDetails;
   </script>
 </head>
 <body>
    <button onClick="printDetails()"></button>
</body>
</html>
 ```

> instead of assigning printDetails, we can also assign anonymous functions to onClick.
> We can't assign more than one function to onClick property otherwise it will get overriden.

- addEventListener vs onClick
> We can assign multiple methods to an element by addEventListener.
> We can even remove evenListeners using removeEventListeners method.

 ```html
 <html>
 <head>
   <script>
    function printDetails(){
      console.log('details logged.');
    }

    const btn = document.querySelector('button');
    btn.addEventListener('click',printDetails);

    setTimeout(()=>{
        btn.removeEventListener('click',printDetails)
    },2000);
   </script>
 </head>
 <body>
    <button onClick="printDetails()"></button>
</body>
</html>
 ```

> For removeEventListener it is mandatory that we pass the same method refernce that we have used to add event listener.

> If you are passing anonymous method to addEventListener then you can't remove the eventlistener.

```html
 <html>
 <head>
   <script>
    function printDetails(){
      console.log('details logged.');
    }

    const btn = document.querySelector('button');
    btn.addEventListener('click',printDetails.bind(this));

    setTimeout(()=>{
        btn.removeEventListener('click',printDetails.bind(this))
    },2000);
   </script>
 </head>
 <body>
    <button onClick="printDetails()"></button>
</body>
</html>
 ```

> If we usee bind with the function being passed to addEventListener, then also in removeEventListener it won't work.
> As bind creates a new function object, so the function passsed in both addEventListener as well as removeEventListener when binded creates a different function object.
> We can store the bind function object in a reference and can pass it to addEventListener and removeEventListener methods.

```html
 <html>
 <head>
   <script>
    function printDetails(){
      console.log('details logged.');
    }

    const btn = document.querySelector('button');
    const bind_func = printDetails.bind(this);
    btn.addEventListener('click',bind_func);

    setTimeout(()=>{
        btn.removeEventListener('click',bind_func)
    },2000);
   </script>
 </head>
 <body>
    <button onClick="printDetails()"></button>
</body>
</html>
 ```