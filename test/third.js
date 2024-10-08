function registration(){
    let password = document.querySelector('#password').value;
    if(password === ""){
        document.querySelector('#error').innerHTML = "Please enter your password";
        let selectname = document.querySelector('#password');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }

    else if(!
        (
            password.match(/[1234567890]/) 
             && 
            password.match(/[!@#$%^&*()]/) 
             && 
            password.match(/[qwertyuiopasdfghjklzxcvbnm]/) 
             && 
            password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
        )
    ){
        document.querySelector('#error').innerHTML = "Password contain atleast 1 lower, upper and special";
        let selectname = document.querySelector('#password');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }

}

