function dom(){
    // let a = document.querySelector("#text");
    // let a = document.querySelector("#text").textContent;
    let a = document.querySelector("#text");
    a.style.color = "red";
    a.style.fontSize = "28px"
    // let b =document.querySelector(".heading");
    let b =document.querySelector(".heading");
    b.style.color = "yellow";
    let c = document.querySelector(".heading").textContent;
    console.log(a);
    console.log(b);
    console.log(c);
}
function zoomin(){
    let selectimg = document.querySelector("#img1");
    selectimg.style.scale = "1.2";
    selectimg.style.transition = "scale 0.5s";
    console.log(selectimg);
}
function initial(){
    let selectimg = document.querySelector("#img1");
    selectimg.style.scale = "1";
    selectimg.style.transition = "scale 0.5s";
}