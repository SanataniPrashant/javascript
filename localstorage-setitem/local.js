function save(){
    var name = document.querySelector("#name").value;
    var age = document.querySelector("#age").value;
    var contact = document.querySelector("#contact").value;

    localStorage.setItem("name",JSON.stringify(name))
    localStorage.setItem("age",JSON.stringify(age))
    localStorage.setItem("contact",JSON.stringify(contact))

    document.querySelector("#n").innerHTML=name;
    document.querySelector("#a").innerHTML=age;
    document.querySelector("#c").innerHTML=contact;

    return false;

}