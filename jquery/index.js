$(document).ready(
    function(){
        // alert("radhe...!!!");
        // $('h1').click(()=>{
        //     alert("clicked");
        // });

        // $("h2").click(()=>{
        //     alert("clicked h2");
        // });

        // $("h3").mouseenter(()=>{
        //     alert("h3");
        // });

        // $("h4").mouseleave(()=>{
        //     alert("h4");
        // });

        // $("p").dblclick(()=>{
        //     alert("dblclicked p");
        // });
        $('.head').html("rammmmmmmmmmmmm");
        $('.head').css("background-color","red")

        let a = $('#ram');
        a.html("rmaaaayaan")
        a.css({
            "background-color":"red",
            "color":"white",
            "padding":"20px"
        })

        $('#btn').click(function(){
            $('#para').slideUp(2000)
        })
        $('#btn1').click(function(){
            $('#para').slideDown(2000)
        })
        $('#btn2').click(function(){
            $('#para').slideToggle(2000)
        })

        $('#btn3').click(function(){
            $('#para').fadeIn(2000)
        })
        $('#btn4').click(function(){
            $('#para').fadeOut(2000)
        })
        $('#btn5').click(function(){
            $('#para').fadeToggle(2000)
        })

    }
)
//fadeIn fadeOut fadeToggle
// cdn - code delivery network 
// jquery - used to consize code  it is an library of js