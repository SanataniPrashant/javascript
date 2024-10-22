let arrofobj =[{
    "id":1,
    "imageurl":"https://tse2.mm.bing.net/th?id=OIP.o7zc5NIo0m2lgFMTwaXwLQHaFM&pid=Api&P=0&h=180",
    "pname":"figma",
    "bname":"fig",
    "price":10.99,

},
{
    "id":2,
    "imageurl":"https://tse2.mm.bing.net/th?id=OIP.o7zc5NIo0m2lgFMTwaXwLQHaFM&pid=Api&P=0&h=180",
    "pname":"figma",
    "bname":"fig",
    "price":10.99,
},
{
    "id":3,
    "imageurl":"https://tse2.mm.bing.net/th?id=OIP.o7zc5NIo0m2lgFMTwaXwLQHaFM&pid=Api&P=0&h=180",
    "pname":"figma",
    "bname":"fig",
    "price":10.99,
},
{
    "id":4,
    "imageurl":"https://tse2.mm.bing.net/th?id=OIP.o7zc5NIo0m2lgFMTwaXwLQHaFM&pid=Api&P=0&h=180",
    "pname":"figma",
    "bname":"fig",
    "price":10.99,
},
{
    "id":5,
    "imageurl":"https://tse2.mm.bing.net/th?id=OIP.o7zc5NIo0m2lgFMTwaXwLQHaFM&pid=Api&P=0&h=180",
    "pname":"figma",
    "bname":"fig",
    "price":10.99,
}
];
let selectdiv = document.querySelector("#ans")
selectdiv.innerHTML = arrofobj.map((card)=>`
    <div class="ram">
        <img  width="200px" height="200px" src="${card.imageurl}" alt="">
        <div>${card.pname}</div>
        <div>${card.bname}</div>
        <div>${card.price}</div>
        <div>add to cart</div>
        <div>buy now</div>
    </div>   
`).join(" ")