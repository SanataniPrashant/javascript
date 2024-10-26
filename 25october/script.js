function del(arg){
    // alert(arg)
    let res = window.confirm("do you really want to delete information")
    if(res){
        fetch(`http://localhost:4000/product/${arg}`,{
            method: 'DELETE'
        });
    }else{
        alert("invalid click")
    }

}



async function run (){
    let data = await fetch('http://localhost:4000/product');
    let response =await data.json();
    // console.log(data);
    // console.log(response);
    let selecttable = document.querySelector("#tabledata");
    selecttable.innerHTML = response.map((items)=>`
    <tr>
        <td>${items.id}</td>
        <td><img width="100px" src="${items.imageurl}" alt="ram"></td>
        <td>${items.pname}</td>
        <td>${items.bname}</td>
        <td>${items.price}</td>
        <td><button onclick = "del('${items.id}')">Delete</button></td>
    </tr>
    `).join(" ");

}