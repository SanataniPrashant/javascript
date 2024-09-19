"use strict"
// function ram(){
//     let a =  parseFloat(window.prompt("Enter number1"));
//     let b =  parseFloat(window.prompt("Enter number2"));
//     window.alert(a+b);
// }
// ram();

// difference between let var const;
// function ramm(){
//     var a = 10;
//     console.log(a);
//     var a = "dhjkfd";
//     console.log(a);

//     let b = "cdjjd";
//     console.log(b);
//     b = "dfjdf";
//     console.log(b);

//     const c = "cdnk";
//     console.log(c);
// }
// ramm();

// 3input window.prompt which is greater output window.alert

function aam(){
    var a = parseInt(window.prompt("enter first no."));
    var b = parseInt(window.prompt("enter second no."));
    var c = parseInt(window.prompt("enter third no."));
    if(a>b && a>c){
        window.alert(a);
        window.alert( "a is greater");


    }
    else if(b>a && b>c){
        window.alert(b);
        window.alert("b is greater");
    }
    else{
        window.alert(c);
        window.alert("c is greater");
    }
}
aam();