function ram(){
    let name = document.querySelector("#name").value;
    let mail = document.querySelector("#mail").value;
    let password = document.querySelector("#password").value;
    let cpassword = document.querySelector("#cpassword").value;
    console.log(name);
    console.log(mail);
    console.log(password);
    console.log(cpassword);
    if(name === ""){
        window.alert("Enter name");
        return false;
    }
    if(mail === ""){
        window.alert("Enter mail");
        return false;
    }
    if(password === ""){
        window.alert("Enter password");
        return false;
    }
    if(cpassword === ""){
        window.alert("Enter cpassword");
        return false;
    }
    return false;
}