## Factory Functions

```js
function calculateTax(amount, tax){
    return amount * tax;
}

let valueAddedTax = calculateTax(1000,0.95);
let commercialTax = calculateTax(1000,0.6);
console.log('valueAddedTax',valueAddedTax); //950
console.log('commercialTax',commercialTax); //600

```
- In the above example, the tax value for a particular type of tax will always remain same. So we can modify the function such that the value of tax is set once and value of amount can only be passed thereafter.
  
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

- In the above code we have written a function inside a function. The scope of tax is within the taxCalculator function.
- Since calculateTax is defined inside taxCalculator function, it will also have access to the variable tax.
- The inner function has access to all the variables of outer function, but the outer function doesn't have access to variables declared inside the inner function.