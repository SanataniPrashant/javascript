// Destructuring: 
// it is a javascript expressionthat makes it possible to unpack values from arrays
const numbers = [10,20,30,40,50];
const [a,b,c] = numbers;
const [first, second, ...rest] = numbers;// Destructuring with spread operator:
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30,40,50]

// Destructuring of objects :
// it is a javascript expression that makes it possible to unpack values from objects.
const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};
// old ways
const nam = person.name
console.log(nam);
const ag = person.age;
// destructuring
const {name,age,occupation} = person;
console.log(name); // John
console.log(age); // 30
console.log(occupation); // Developer

// hosting : What is Hoisting in JavaScript?
// Hoisting is the default behavior in JavaScript where variable and function declarations
//  are moved to the top of their respective scopes during the compilation phase. 
// This guarantees that regardless of where these declarations appear within a scope, 
// they can be accessed throughout that scope.

// Features of Hoisting
// Declarations are hoisted, not initializations.
// Allows calling functions before their declarations.
// All variable and function declarations are processed before any code execution.
// Undeclared variables are implicitly created as global variables when assigned a value.