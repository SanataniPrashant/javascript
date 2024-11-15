function formm(){
    let data = {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
        contact:document.querySelector("#contact").value
    }
    let d =JSON.stringify(data)
    localStorage.setItem("mydata",d)

    document.querySelector("#n").innerHTML=document.querySelector("#name").value;
    document.querySelector("#a").innerHTML=document.querySelector("#age").value;
    document.querySelector("#c").innerHTML=document.querySelector("#contact").value;
    
}

let m = JSON.parse(localStorage.getItem("mydata"))
// console.log(JSON.parse(localStorage.getItem("mydata")));
// console.log(m);
// console.log(m.name);

let myname = document.querySelector("#name")
let myage = document.querySelector("#age")
let mycontact = document.querySelector("#contact")

myname.innerHTML =m.name
myage.innerHTML =m.age
mycontact.innerHTML =m.contact