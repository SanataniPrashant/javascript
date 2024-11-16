// setTimeout and setInterval
// higherorder function : 
// callback funtion : 
// ex. setTimeout(show,5000) here setTimeout is an higherorder function and show is a callback function

setTimeout(show,5000);
function show(){
    console.log("called");
}

setTimeout(()=>{
    console.log("called");
},8000)

function kuchbhi(){
    setTimeout(show,3000);
    function show(){
         document.querySelector("#website").style.display = "block";
         document.querySelector("#img").style.display = "none";
    }
}
// spread operator :
let arr1 = [1,2,3,4]
let arr2 = [5,6,7]
let arr3 = [...arr1,...arr2]
console.log(arr3)
arr3 = arr1.slice(0)
console.log(arr3)
