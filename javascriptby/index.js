const numbers = [10, 20, 30, 45, 856, 23, 14, 2];
const newnum = numbers.filter(function(x){
    return x > 20;
});

console.log(newnum);
const evennum = numbers.filter(function(y){
    return y % 2 === 0;
});
console.log(evennum);

const sortedval = evennum.sort(function(a,b){
    return a - b;
});
console.log(sortedval);

let today = new Date();
// year month day hour minutes seconds miliseconds
console.log(today);

let todayy = new Date(1963,11,26,12,45,45,78);
console.log(todayy);
const utcDate = today.toISOString();
console.log(utcDate);

const mydate = Date.now(); // written value in miliseconds from jan 1 , 1970 
console .log(mydate);

const mydatee = Date.parse("Dec 21,2022"); // same as Date.now but here we can pass the timeline according to us.
console .log(mydatee);

// Date methods

