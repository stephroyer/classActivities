// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let count = "Hello, World!";
let age = 42;
let booleanVar = true;
let Myvar; // intentionally left undefined
let MynullVar = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof count);
console.log(typeof age);
console.log(typeof booleanVar);
console.log(typeof Myvar);
console.log(typeof MynullVar);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let templateLiteral = `The string is: ${count} and the number is: ${age}`;
// reassign the value of the variable that references "null"
MynullVar= "this is my new value";
// print the value and its type
console.log(MynullVar);
console.log(typeof MynullVar);
// print a variable that causes a ReferenceError
let doesNotExist=0;
console.log(doesNotExist);
console.log(templateLiteral)// alter the previous line to no longer cause a ReferenceError
