

    $(document).ready(function(){
        menuNav();

        var valida = true;
        $(".botMenu").click(function () {
            if (valida){
                $("#menuLateral").css({"transform":"translate(0%, 0 )"});
                $(".conteudo").css({"transform":"translate(80%, 0 )"});
                $(".botMenu").css({"position":"fixed"});
                valida = false;
            } else{
                $("#menuLateral").css({"transform":"translate(-80%, 0 )"});
                $(".conteudo").css({"transform":"translate(0%, 0 )"});
                $(".botMenu").css({"position":"static"});

                valida = true;
            }



        });


        // carousel
        $("#owl-demo2").owlCarousel({
            center: true,
            items:1,
            loop:true,
        });
        $("#owl-seta").owlCarousel({
            center: true,
            items:2,
            loop:true,
        });
        // fim carousel

    });






$(window).resize(function(){
    menuNav();

});
function menuNav() {
    var widthMax = $(window).width();
    if (widthMax <= 768){
        var nav = $("nav#menu").detach();
        $('#menuLateral').append(nav);
    }else{
        var nav = $("nav#menu").detach();
        $('#menuCentral').append(nav);
    }
    console.log(widthMax);
};
