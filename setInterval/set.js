setInterval(run,1000);
let count = 0;
function run(){
    count++;
    let selecth1 = document.querySelector("#output");
    selecth1.innerHTML = count;
}