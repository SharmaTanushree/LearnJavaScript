## Closure

- Every function is a closure.
- Every function closes over a surrounding environment.
- It registers the surrounding environment and variables registered there and memorizes the value of these variables.

```js
function taxCalculator(tax){
    function calculateTax(amount){
        return tax * amount ;
    }
    return calculateTax;
}

let valueAddedTaxCalculator = taxCalculator(0.95);
let commercialTaxCalculator = taxCalculator(0.6);

let valueAddedTax = valueAddedTaxCalculator(1000);
let commercialTax = commercialTaxCalculator(1000);

console.log('valueAddedTax',valueAddedTax);  //950
console.log('commercialTax',commercialTax);  //600
```
- Each function has it's own lexical environment and a global environment.
- In the above example, the function taxCalculator creates it's own lexical environment and registers the variable that are accessible.
- The function calculateTax is created when taxCalculator function gets executed.

```js
let multiplier = 1.1;
function taxCalculator(tax){
    function calculateTax(amount){
        console.log(multiplier); //1.2
        return tax * amount * multiplier ;
    }
    return calculateTax;
}

let valueAddedTaxCalculator = taxCalculator(0.95);
let commercialTaxCalculator = taxCalculator(0.6);

multiplier = 1.2;

let valueAddedTax = valueAddedTaxCalculator(1000);
let commercialTax = commercialTaxCalculator(1000);

console.log('valueAddedTax',valueAddedTax);  //1140
console.log('commercialTax',commercialTax);  //720
```
- In the above code, we have defined a global variable multiplier and its value is 1.1.
- When we execute taxCalculator function, the calculateTax function gets create. There it doesn't fix the value of multiplier but it registers the variable multiplier.
- when the calculateTax function is executed, the function memorizes the value of multiplier which is changed to 1.2.

```js
let userName = 'Jack'
function getUserName(){
    console.log(userName);
}
userName = 'Jill';
getUserName();  //Jill
```
- The function getUserName when created, doesn't assign the value to userName (line no. -56) and fix it.

- It just point to the outer environment and when the function is executed it takes the current value of the variable userName;

```js
let userName = 'Jack'
function getUserName(){
    let name = userName;
    console.log(name);
}
userName = 'Jill';
getUserName();  //Jill
```

```js
function getUserName(){
    let name = 'Jack';
    console.log(name);
}
let = 'Jill';
getUserName();  //jack 
```

  