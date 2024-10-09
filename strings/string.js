let str = 'we are developer';
let str1 = "we are developer";
let str2 = `we are developer`;
console.log(str);
// console.log(str[5]);
// console.log(str[0]);
// console.log(str.length);
// let count = 0;
// for(let i=0; i<str.length; i++){
//     console.log(i);
//     console.log(str[i]);
//     count++;
// }
// console.log(count);
// console.log(str.length);

// let count = 0;
// for(let i = 0; i<str.length; i++){
//     if(str[i] === " "){
//         count++;
//     }
// }
function output(){
    let str = document.querySelector("#str").value;
    let count = 0;
    for(let i = 0; i<str.length; i++){
    if(str[i] === " "){
        count++;
    }
}
document.querySelector("#answer").innerHTML = count;
return false;
}