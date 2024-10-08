function Submit(){
    let a=document.querySelector("#name").value;
    let doing=document.querySelector("#doing").value;
    let phone=document.querySelector("#phone").value;
    let email=document.querySelector("#email").value;
    let add=document.querySelector("#address").value; 
    let conatiner =document.querySelector(".conatiner");
    conatiner.style.display="block";
    conatiner.innerHTML=`
    <h1 class="name">${a}</h1>
    <p class="doing">${doing}</p>
    <p class="phone">${phone}</p>
    <p class="email">${email}</p>
    <p class="address">${add}</p>`;
 
}