async function run (){
        let data = await fetch('http://localhost:4000/product');
        let response =await data.json();
        // console.log(data);
        // console.log(response);
        let selecttable = document.querySelector("#table")
        selecttable.innerHTML = response.map((items)=>`
        <tr>
            <td>${items.id}</td>
            <td><img src="${items.imgurl}" alt=""></td>
            <td>${items.pname}</td>
            <td>${items.bname}</td>
            <td>${items.price}</td>
        </tr>
        `).join(" ");

    }