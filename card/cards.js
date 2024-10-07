function ram(){
    let inputfield = document.querySelector("input");
    let outfield = document.querySelector("#output");
    let submit = document.querySelector("button");
    console.log(inputfield,outfield,submit);
    outfield.textContent = inputfield.value;
    return false;
}