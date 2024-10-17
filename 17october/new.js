// let arr = [45,75,78,12,13,14];
// let store = [];
// for (let i of arr) {
//     store.push(i*10);
// }
// console.log(store);

// // to overcome
// let newarr = arr.map((i) => {return i*10});
// console.log(newarr);

// let ansarr = arr.map((i) => {return i/10});
// console.log(ansarr);
// templet literal
function run(){
let arr = [
    './Blue Modern Corporate Staff Profile LinkedIn Banner.png',

    'https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1728567409684-e42ba81a3c34?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1700830960459-90d4dd355b7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1728914298685-c1c9dc373069?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

let output = document.querySelector("#answer");

output.innerHTML = arr.map((imgurl) =>`
    <img style="width:400px; height:400px;" src="${imgurl}" alt="image not found">
`).join(" ")
}
