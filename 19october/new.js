// let selectbtn = document.querySelector("#btn");
// selectbtn.addEventListener('click',show);
function show(){
let str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let store = "";
for(i=0; i<6; i++){
    let random = Math.random();
    let ans = random * str.length;
    let afterfloor = Math.floor(ans);
    let cha = str.charAt(afterfloor);
    store = store + cha;
}
console.log(store);


let output = document.querySelector("#output");
output.innerHTML = store;
}