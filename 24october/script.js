let uid = null;

function add(){
   let addform=document.querySelector("#addform");
   addform.style.display="block";
}

function addinfo(){
    let imageurl =  document.querySelector('.imageurl').value;
    let pname = document.querySelector('.pname').value;
    let bname =  document.querySelector('.bname').value;
    let price = document.querySelector('.price').value;
    
    let obj = {
        "imageurl":imageurl,
        "pname":pname,
        "bname" : bname,
        "price" : price
    }

    console.log(obj)
    fetch(`http://localhost:4000/product/`,{
        method:"POST",
        body:JSON.stringify(obj)
    })
}


async function updateform(id){
    let data = await fetch(`http://localhost:4000/product/${id}`);
    let res = await data.json();
    uid = id;
    let selectform = document.querySelector('#upform');
    selectform.style.display = "block";
    console.log(selectform);

    document.querySelector('#imageurl').value = res.imageurl;
    document.querySelector('#pname').value = res.pname;
    document.querySelector('#bname').value = res.bname;
    document.querySelector('#price').value = res.price;
}

function finalupdate(){
    let imageurl =  document.querySelector('#imageurl').value;
    let pname = document.querySelector('#pname').value;
    let bname =  document.querySelector('#bname').value;
    let price = document.querySelector('#price').value;
    
    let obj = {
        "imageurl":imageurl,
        "pname":pname,
        "bname" : bname,
        "price" : price
    }

    console.log(obj)
    fetch(`http://localhost:4000/product/${uid}`,{
        method:"PUT",
        body:JSON.stringify(obj)
    })
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
            <td><button onclick = "updateform('${items.id}')">Update</button></td>
        </tr>
        `).join(" ");

}
