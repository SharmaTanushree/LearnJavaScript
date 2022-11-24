const greet={
    msg : 'WELCOME',
    printMsg(){
        console.log(`Hello ${this.msg}`);
    }
}

greet.printMsg();   //Hello WELCOME
setTimeout(greet.printMsg,1000);
/*
*The line number 10 results Hello undefined after 1ms.
*when the call is made to printMsg through setTimeout 
*function the context is lost. There this = windows
*whereas  when printMsg is called from line number 9, 
*there this = greet
*/

## How to set right context for this?

- Using a wrapper

const greet={
    msg : 'WELCOME',
    printMsg(){
        console.log(`Hello ${this.msg}`);
    }
}
setTimeout(()=>{
    greet.printMsg();
},1000);                     //Hello WELCOME

what if I change the value of greet before the setTimeout executes the function printMsg?

let greet={
    msg : 'WELCOME',
    printMsg(){
        console.log(`Hello ${this.msg}`);
    }
};
setTimeout(()=>{
    greet.printMsg();
},3000);

 greet={
    msg : 'Msg is altered!',
    printMsg(){
        console.log(`${this.msg}`);
    }
};                        //Msg is altered!

slight vulnerability appears in the above solution.Let's move to a better approach.

- Use bind a built-in method provided by Functions.
  let boundFunc = func.bind(context);

  The result of func.bind(context) is a special function like exotic object that is callable as function and this bound function calls the func setting this inside func to context.

  So, using bound function we will always call func with fixed context.

  
let greet={
    msg : 'WELCOME',
};

function displayText(){
    console.log(this.msg);
}

let displayT = displayText.bind(greet)

displayT();     //WELCOME

//here displayT is a bound variant of displayText with fixed this=greet

All other arguments to the function is passed "as is".

let greet={
    msg : 'WELCOME',
};

function displayText(firstName){
    console.log(`${this.msg} ${firstName} `);
}

let displayT = displayText.bind(greet)

displayT('John');     //WELCOME John


lets try bind on object method.

let greet={
    msg : 'WELCOME',
    printMsg(){
        console.log(`Hello ${this.msg}`);
    }
};

greetMsg = greet.printMsg.bind(greet);

setTimeout(()=>{
    greetMsg();
},3000);

 greet={
    msg : 'Msg is altered!',
    printMsg(){
        console.log(`${this.msg}`);
    }
};   

//The output of above code is "Hello WELCOME"

## Partial Functions.

Using bind we can bind not only this but also arguments.
let bound = func.bind(context, [arg1], [arg2], ...);

function mul(a,b){
    return a*b;
}

let double = mul.bind(null,2);
double(3);  //6
double(5,6) //10

here we are not using this but bind requires it so we are passing null.

This is called partial function where we create a new function by fixing some parameters of the existing one.


if we want to fix arguments but not the context this we can use a function partial for binding only arguments

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

let greet={
    msg : 'WELCOME',
    printMsg(phrase,time){
        console.log(`${phrase} ${this.msg} ${time}`);
    }
};

greet.printNow = partial(greet.printMsg,new Date().getHours()+ ':' + new Date().getMinutes());

greet.printNow('Hello');


function sayHi() {
  alert( this.name );
  alert (this.test);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
  test: 7
});
