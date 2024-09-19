"use strict"
// function prashant(){
//     let res = window.confirm("Do you really want to logout");
//     // console.log(res);
//     if (res) {
//         window.location.href="login.html";
//     }
//     else{
//         window.alert("Invalid link")
//     }
// }
// prashant();

function pra(){
    var a = parseInt(window.prompt("enter the no."));
    if(a % 2 === 0){
        window.alert(a + "even");
    }
    else{
        window.alert(a + "odd");
    }
}
pra();