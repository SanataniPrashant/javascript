async function fet_data(){
    let res = await fetch("http://localhost:3000/STUDENT")
    let data = await res.json()
    let final_data = data.map((e)=>`
    <tr>
        <td> ${e.id} </td>   
        <td> ${e.name} </td>   
        <td> ${e.age} </td>   
        <td> ${e.address} </td>   
        <td> <button onclick = "mydelete('${e.id}')">Delete</button> </td>   
        <td> <button onclick = "myedit('${e.id}')">EDIT</button> </td>   
    </tr>
    `).join("")
    document.querySelector("#showdata").innerHTML = final_data;
}
fet_data();

function mydelete(id){
fetch(`http://localhost:3000/STUDENT/${id}`,{
    method:'DELETE'
    })
    .then(re=>alert("deleted successfully"))
}

async function myedit(id){
    let myupdata = await fetch(`http://localhost:3000/STUDENT/${id}`)
    let redata = await myupdata.json()
    let senddata =`
    <input type="text" value="${redata.id}" id="id1" readonly> <br>
    <input type="text" value="${redata.name}" id="name1" > <br>
    <input type="text" value="${redata.age}" id="age1" > <br>
    <input type="text" value="${redata.address}" id="address1" > <br>
    <input type = "submit" onclick="finalupdate('${redata.id}')">
    `
    document.querySelector("#edittable").innerHTML = senddata;
}

function finalupdate(id){
    let fdata = {
        name:document.querySelector("#name1").value ,
        age:document.querySelector("#age1").value ,
        address:document.querySelector("#address1").value 
    }
    fetch(`http://localhost:3000/STUDENT/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(fdata)
    })
    .then(r=>alert("updated..!!"))
}


