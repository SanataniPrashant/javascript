$(document).ready(
    function(){
        alert("radhe...!!!");
        $('h1').click(()=>{
            alert("clicked");
        });

        $("h2").click(()=>{
            alert("clicked h2");
        });

        $("h3").mouseenter(()=>{
            alert("h3");
        });

        $("h4").mouseleave(()=>{
            alert("h4");
        });

        $("p").dblclick(()=>{
            alert("dblclicked p");
        });
    }
)