// async function read(){
//     let data = await fetch("http://localhost:3000/Available");
//     let jsondata = await data.json();
//     console.log(jsondata);

//     let table = `
//         <table border="1">
//             <tr>
//                 <th>Rollno</th>
//                 <th>Name</th>
//                 <th>City</th>
//                 <th>Fees</th>
//             </tr>
//         `;


//      jsondata.map((key)=>{
//         table+=`
//         <tr>
//         <td>${key.Rollno}</td>
//         <td>${key.Name}</td>
//         <td>${key.City}</td>
//         <td>${key.Fees}</td>
//         `
//      })
//     table+=`</table>`
//     document.getElementById("ram").innerHTML= table;
// }

// for async await try{
// }
// catch{
// }

//or

// promise -> fetch().then().catch();

// function read(){
//     let api = "http://localhost:3000/Available";

//     let table = `
//         <table border="1">
//             <tr>
//                 <th>Rollno</th>
//                 <th>Name</th>
//                 <th>City</th>
//                 <th>Fees</th>
//             </tr>
//         `;

//     fetch(api).then((res)=>{
//         return res.json();
//     }).then((Data)=>{
//         console.log(Data);
//         Data.map((item)=>{
//             table+=`
//             <tr>
//             <td>${item.Rollno}</td>
//             <td>${item.Name}</td>
//             <td>${item.City}</td>
//             <td>${item.Fees}</td>
//             `
//         })
//         table+=`</table>`
//     document.getElementById("ram").innerHTML= table;

//     }).catch((error)=>{
//         console.log(error);
//     });
// }

// function insert(){
//     let rollno = document.getElementById("rn").value;
//     let name = document.getElementById("nm").value;
//     let city = document.getElementById("ct").value;
//     let fees = document.getElementById("fs").value;

//     let api = "http://localhost:3000/Available";
//     let data = {
//         "Rollno": rollno,
//         "Name": name,
//         "City": city,
//         "Fees": fees
//     };
//     fetch(api, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             },
//         body: JSON.stringify(data)
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .then(res=>alert("sdfgh"))
//         .catch((error) => console.error('Error:', error));
// }

// search
async function search(){
    let rollno = document.getElementById("rnn").value;
    let api = `http://localhost:3000/Available/?Rollno=${rollno}`;

    let data = await fetch(api);
    let jsondata = await data.json();

    let table1 = `
    <table border="1" width="500px">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
    `
    jsondata.map((item) => {
        table1 += `
        <tr>
        <td>${item.Rollno}</td>
        <td>${item.Name}</td>
        <td>${item.City}</td>
        <td>${item.Fees}</td>
        </tr>
        `
        });
        table1 += `</table>`;
        document.getElementById("qq").innerHTML = table1;
}