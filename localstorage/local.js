// localStorage.setItem("name","pandey")
// localStorage.setItem("name","pandeyji") // if key same then data override
// localStorage.setItem("age","45")
// localStorage.setItem("dob",87)

// let d = localStorage.getItem("dob")
// console.log(d)

// localStorage.removeItem("age")

// function form(){
//     let a = document.querySelector("#name").value;
//     localStorage.setItem("name",a)
//     let b = document.querySelector("#age").value;
//     localStorage.setItem("age",JSON.stringify(b))
//     let c= document.querySelector("#dob").value;
//     localStorage.setItem("dob",JSON.stringify(c))
//     console.log(a,b,c);

//     document.querySelector("#n").innerHTML=a;
//     document.querySelector("#a").innerHTML=b;
//     document.querySelector("#d").innerHTML=c;
//     return false;
// }

// let obj = {
//     name:"ram",
//     age:45,
//     dob:"1990-01-01"
// }
// for (k in obj){
//     console.log(k)
//     console.log(obj[k])
//     }
// console.log(obj);
// console.log(obj.age);

// let obj = {
//     name:"ram",
//     age:12,
//     contact: 45
// }

// function formm(){
// let a = document.querySelector("#name").value;
// let b = document.querySelector("#age").value;
// let c = document.querySelector("#contact").value;

// obj.name=a;
// obj.age=parseInt(b);
// obj.contact=parseInt(c);
// localStorage.setItem("data",JSON.stringify(obj))
// let m = JSON.parse(localStorage.getItem("data"))
// console.log(JSON.parse(localStorage.getItem("data")));
// console.log(m);
// console.log(m.name);

// return false;
// }


function formm(){
    let data = {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
        contact:document.querySelector("#contact").value
    }
    let d =JSON.stringify(data)
    localStorage.setItem("mydata",d)
    
}
let m = JSON.parse(localStorage.getItem("mydata"))
console.log(JSON.parse(localStorage.getItem("mydata")));
console.log(m);


console.log(m.name);
let myname = document.querySelector("#name")
let myage = document.querySelector("#age")
let mycontact = document.querySelector("#contact")

myname.innerHTML =m.name
myage.innerHTML =m.age
mycontact.innerHTML =m.contact
// . is an access member operator

//same protocoll same port same domain me hi data show hoga otherwise it will not show the data 
// localstorage - browser jo storage deta always stored in the form of key value pair