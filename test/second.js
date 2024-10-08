function pra(){
    var a = parseFloat(window.prompt("Enter Your Salary"));
    if(a<300000){
        window.alert("you dont have to pay any tax")
    }
    else if(a>=300000 && a<750000){
        var tax = parseFloat((a/100)*10);
        window.alert("you have to pay "+ tax +" as tax");
    }
    else if(a>=750000){
        var tax = parseFloat((a/100)*20);
        window.alert("you have to pay "+ tax +" as tax");
    }
    else{
        window.alert("Invalid Input");
    }

}
pra();