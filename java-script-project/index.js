function validateForm() {
    let phoneInput = document.querySelector("#phone");
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");

    let phone = phoneInput.value; 
    let email = emailInput.value; 
    let password = passwordInput.value;
    console.log(phone,email,password);

    let user = JSON.parse(localStorage.getItem("user"));
    let userNumber = user.number;
    let userEmail = user.email;
    let userPassword = user.password;
    console.log(userNumber,userEmail,userPassword);
    
    if (!user) {
        window.alert("User  data not found.");
        return false;
    }

    if (!(phone == userNumber)) {
        phoneInput.style.color = "red";
        window.alert("Please enter the correct phone number.");
        phoneInput.focus();
        return false; 
    }
    if (!(email == userEmail)) {
        emailInput.style.color = "red";
        window.alert("Please enter the correct email.");
        emailInput.focus();
        return false; 
    }
    if (!(password == userPassword)) {
        passwordInput.style.color = "red";
        window.alert("Please enter the correct password.");
        passwordInput.focus();
        return false; 
    }
    return true;
}

