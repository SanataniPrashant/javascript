function ram(){
    let name = document.querySelector("#name").value;
    let mail = document.querySelector("#mail").value;
    let phone = document.querySelector("#phone").value;
    let password = document.querySelector("#password").value;
    let cpassword = document.querySelector("#cpassword").value;
    console.log(name);
    console.log(mail);
    console.log(phone);
    console.log(password);
    console.log(cpassword);
    if(name === ""){
        let d = document.querySelector("#errorname");
        d.innerHTML="Please Enter your name";
        d.style.color ="white";
        let name = document.querySelector("#name");
        name.style.borderColor="red";
        name.style.outlineColor="red";
        window.alert("Enter name");
        return false;
    }
    if(mail === ""){
        let d = document.querySelector("#errorname1");
        d.innerHTML="Please Enter your mail";
        d.style.color ="white";
        let mail = document.querySelector("#mail");
        mail.style.borderColor="red";
        mail.style.outlineColor="red";
        window.alert("Enter mail");
        return false;
    }
    if(phone === ""){
        let d = document.querySelector("#errorname2");
        d.innerHTML="Please Enter your phone";
        d.style.color ="white";
        let phone = document.querySelector("#phone");
        phone.style.borderColor="red";
        phone.style.outlineColor="red";
        window.alert("Enter phone");
        return false;
    }
    if(password === ""){
        let d = document.querySelector("#errorname3");
        d.innerHTML="Please Enter your password";
        d.style.color ="white";
        let password = document.querySelector("#password");
        password.style.borderColor="red";
        password.style.outlineColor="red";
        window.alert("Enter password");
        return false;
    }
    if(cpassword === ""){
        let d = document.querySelector("#errorname4");
        d.innerHTML="Please Enter your cpassword";
        d.style.color ="white";
        let cpassword = document.querySelector("#cpassword");
        cpassword.style.borderColor="red";
        cpassword.style.outlineColor="red";
        window.alert("Enter cpassword");
        return false;
    }
    return false;
}