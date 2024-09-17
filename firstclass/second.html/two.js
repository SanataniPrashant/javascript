console.log("this is second class");
function ram(){
    let num1 = 90;
    let num2 = 10;
    console.log("function called");
    console.log(num1 + num2);
}
ram();
function ramm(){
    let num3 = window.prompt("Enter the no.3");
    console.log(num3);
    console.log(typeof(num3));
    let num4 = window.prompt("Enter the no.4");
    console.log(num4);
    console.log(typeof(num4));
    console.log(num3 +num4);
}
ramm();

function rammm(){
    let num5 = parseInt(window.prompt("Enter the no.5"));
    console.log(num5);
    console.log(typeof(num5));
    let num6 = parseInt(window.prompt("Enter the no.6"));
    console.log(num6);
    console.log(typeof(num6));
    console.log(num5 +num6);
}
rammm();