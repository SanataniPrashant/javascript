// function ram(){
//     let a = parseFloat(window.prompt("Enter First no."));
//     let b = parseFloat(window.prompt("Enter Second no."));
//     let c = parseFloat(window.prompt("Enter Third no."));
//     let d = (a + b + c) / 3;
//     window.alert("Average =" + d);
// }
// ram();

// function ramm(){
//     let a = document.querySelector("#image");
//     a.src = "https://images.unsplash.com/photo-1724510637078-274e1b12ee91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// }

// Write a JavaScript program to compare a three number which number is greater.

// function ramayan(){
//     let a = parseFloat(window.prompt("Enter First no."));
//     let b = parseFloat(window.prompt("Enter Second no."));
//     let c = parseFloat(window.prompt("Enter Third no."));
//     if(a > b && a > c){
//         window.alert("First number is greater");
//     }
//     else if(b > a && b > c){
//         window.alert("Second number is greater");
//     }
//     else{
//         window.alert("Third number is greater");
//     }
// }
// ramayan();

function rest()
{
    let box = document.querySelector("#box");
    box.style.borderRadius = "50%";
}

function restt()
{
    let box = document.querySelector("#box");
    box.style.borderRadius = "0";
}