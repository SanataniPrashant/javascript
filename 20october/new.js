// object is the collection of key and value pairs  
// value is accessed by (.)
// curly braces used to make object 
// array of object non-sql data
// sql data - tabular form

let obj = {
    "name": "ram",
    "age": 25
}
console.log(obj.age);
let obj1 = {
    "name": "ramayan",
    "age": 28
}

// let document1 = {
//     "queryselector":function(){
//         console.log("hiii");
//     },
//     "getElementById":function(){
//         console.log("hiii");
//     }

// }
// document1.queryselector('#id');

let arr = [{
    "id":1,
    "name": "ram",
    "age": 25,
    "mobno":9695000092,
    "img":"https://images.unsplash.com/photo-1729432102846-408bd918ca99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
},
{
    "id":2,
    "name": "ramayan",
    "age": 28,
    "mobno":9695000092,
    "img":"https://images.unsplash.com/photo-1729432102846-408bd918ca99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
},
{
    "id":3,
    "name": "ramayan",
    "age": 28,
    "mobno":9695000092,
    "img":"https://images.unsplash.com/photo-1729432102846-408bd918ca99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
}
];

console.log(arr[0].mobno);
console.log(arr[1].name);
console.log(arr[1].name[2]);
console.log(arr[0]);

let selecttable = document.querySelector("#output");
selecttable.innerHTML = arr.map((e)=>`  
    <tr>
        <td>${e.id} </td>
        <td>${e.name} </td>
        <td>${e.mobno} </td>
        <td><img width="100px"src="${e.img}"> </td>
    </tr>
    `).join(" ");


// loop and inner html ka kam map method kam karti hai