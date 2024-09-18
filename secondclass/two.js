"use strict"
function ram(){
    let a =  parseFloat(window.prompt("Enter number1"));
    let b =  parseFloat(window.prompt("Enter number2"));
    window.alert(a+b);
}
ram();

// difference between let var const;
function ramm(){
    var a = 10;
    console.log(a);
    var a = "dhjkfd";
    console.log(a);

    let b = "cdjjd";
    console.log(b);
    b = "dfjdf";
    console.log(b);

    const c = "cdnk";
    console.log(c);
}
ramm();

// 3input window.prompt which is greater output window.alert