// destructuring of array and object 
let obj = {
    "id": 1,
    "name": 'John',
    "age": 30,
    "course":function (){return 13} // method
}
let {id,name,age,course} = obj;
console.log(course());
// let course = obj.course;
// console.log(course());
// console.log(obj.name);
// let { id, name, age } = obj;
// console.log(id);
// let {name} = obj;
// console.log(name); // John
// let {age} = obj;
// console.log(age); // 30

let arr = [1,2,3,4,5,6,7]
let [a,b,c,d,e,f,g] = arr;
console.log(d);
// callback function : function which argument takes as a function  but not return a function
// recursion: function ke andar function use karna.
//method vs function in js obj ke andar function banaya to vo method  outside or normally function declare kiya to vo function hai
// in cpp class ke andar function banaya to vo method hota hai 

// function : it is a block of code it is reusable and is executed when called
// 1. regular or normal function or conventional
// function show(arg,arg1){

// }
// show(1,10);

// 2. arrow function : variable name se chalta hai function ka koi nam nahi hota
// const run=( =>{
//    })
//run();

// 3. IIFE (imediately invoked function expression)
// (function(){
//})();

//4. higher order function 
// function which argument takes as a function and return a function .
