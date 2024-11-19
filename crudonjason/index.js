async function fet_data(){
    let res = await fetch("http://localhost:3000/students")
    let data = await res.json()
    let final_data = data.map((e)=>`
    <h1>${e.id}</h1>
    <h1>${e.name}</h1>
    <h1>${e.age}</h1>
    <h1>${e.address}</h1>
    `).join("")
    document.querySelector("#showdata").innerHTML = final_data;
}
fet_data();