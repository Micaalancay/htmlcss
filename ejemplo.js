console.log(x); // undefined
var x = 10;

var x;
console.log(x); // undefined
x = 10;

console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 20;