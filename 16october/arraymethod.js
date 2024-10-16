let arrstr = ["hello","ram","prashant","radhe"];

arrstr.sort();
console.log(arrstr);

arrstr.reverse();
console.log(arrstr);

let arr = [5,9,25,24,62,85,64,78,98];

arr.sort(function(a,b){return a-b}); // ascending order
console.log(arr);

arr.sort(function(a,b){return b-a}); // decending order
console.log(arr);

let output = arr.reduce(function(a,b){return a+b})
console.log(output);

let outputt = arr.reduce(function(a,b){return a*b})
console.log(outputt);

let outputtt = arr.reduce(function(a,b){return a-b})
console.log(outputtt);

let outputttt = arr.reduce(function(a,b){return a/b})
console.log(outputttt);

let answerstr = arr.toString();
console.log(answerstr);

let answerjoin = arr.join(" ");
console.log(answerjoin);

// higher order method
// map
// reduce 
// number sort
//find 
// filter
//foreach

