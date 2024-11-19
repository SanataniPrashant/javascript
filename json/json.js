// api: application programming interface 

// JSON : javascript object notation 

// JSON is a lightweight data interchange format that is easy to read and write.

// synchronous line by line execute karega.
// when we fetch api js behaves like asynchronous .
// fech function method 1.get (by default) 2. post 3. Delete 4. put 
// fech() -> return  promise -> async await 

// map function return an array

async function fet(){
   let res = await fetch("https://jsonplaceholder.typicode.com/comments")
   let data = await res.json()
//    console.log(data)
    let ram =  data.map((e)=>`
    <h1> ${e.id} </h1>
    <h1> ${e.email} </h1>
    `).join("");

    document.querySelector("#demo").innerHTML = ram
}
fet();