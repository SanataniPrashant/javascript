// userinput (form)
function data(){
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    console.log(name);
    console.log(age);
    if(name === ""){
        window.alert("Enter name");
        return false;
    }
    if(age === ""){
        window.alert("Enter age");
        return false;
    }
    return false;
}

// function dataa(){
//     let name = document.querySelector("#name");
//     let age = document.querySelector("#age");
//     let ans = document.querySelector("#value");
//     ans.value = name.value + age.value;
//     console.log(name);
//     console.log(age);
//     return false;
// }