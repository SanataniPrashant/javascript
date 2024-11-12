function d(){return 2
}

// let a=d(); or console.log(d());
console.log(d());
function e(){return "js"
}
console.log(e());

let b = ()=>{return "js"}
console.log(b());
console.log(b);

let s=(a,b)=>{return a+b}
console.log(s(1,2));
// arrow function syntax
// 1. ()=>{} 
// 2. ()=>()
// 3. ()=>
// 4.  =>

// w.a.p to find area of circle

// function area(radius){
//     console.log(3.14*radius*radius);
// }
// area(4);

// w.a.p to find area of circle using arrow function
// let area=(radius)=>{console.log(3.14*radius*radius)}
// area(4);

// or 
let area=(r)=>{
    return (3.14*r*r)
}
console.log(area(5));