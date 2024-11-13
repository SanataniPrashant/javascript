// localStorage.setItem("name","pandey")
// localStorage.setItem("name","pandeyji") // if key same then data override
// localStorage.setItem("age","45")
// localStorage.setItem("dob",87)

// let d = localStorage.getItem("dob")
// console.log(d)

// localStorage.removeItem("age")

function form(){
    let a = document.querySelector("#name").value;
    localStorage.setItem("name",a)
    let b = document.querySelector("#age").value;
    localStorage.setItem("age",JSON.stringify(b))
    let c= document.querySelector("#dob").value;
    localStorage.setItem("dob",JSON.stringify(c))
    console.log(a,b,c);

    document.querySelector("#n").innerHTML=a;
    document.querySelector("#a").innerHTML=b;
    document.querySelector("#d").innerHTML=c;
    return false;
}

//same protocoll same port same domain me hi data show hoga otherwise it will not show the data 
// localstorage - browser jo storage deta always stored in the form of key value pair