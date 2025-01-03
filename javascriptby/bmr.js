// document.getElementById("btn").addEventListener("click",bmrCal);
function bmrCal(){
    let name = document.getElementById("name").value;
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    console.log(gender);
    let bmr;
    if(gender == "Male"){
        bmr = (10  * weight ) + (6.25 * height) - (5 * age ) + 5;
    }
    else{
        bmr = (10  * weight ) + (6.25 * height) - (5 * age ) - 161 ;
    }  
    document.getElementById("ans").innerHTML = "Hello" + name +  " <br>  Your BMR is : " + bmr ; 
}

