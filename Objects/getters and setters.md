## getters and setters

- get and set can be used as method to get and set any property.
- we can access property directly by property name.
- we can make the property read only by removing setter method.

```js
let newMovie = {
    id :  78,
    info:{
        set title(value){
           if(value === ''){
            this._title = 'DEFAULT';
            return;
           }
           this._title = value;
        },
    
        get title(){
            return this._title.toUpperCase()
        }
    }
}

newMovie.info.title = 'Hero';
console.log(newMovie.info.title)  //HERO
```