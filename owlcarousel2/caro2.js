

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
            // animateIn:'rollln',
            // animateOut:'rollln',
            center: true,
            nav:true,
            // slideTransition:'zoomIn',
            mouseDrag:false,
            items:3,
            loop:true,
            margin: 10,
            smartSpeed:650

        });




        var owlSeta = $("#owl-seta").owlCarousel({
            stagePadding: 135,
            loop:true,
            nav:false,
            margin:0,
            items:1,
            lazyLoad: true,
            nav:true
        });

        $('button.next').click(function() {
            owlSeta.trigger('next.owl.carousel');
            slideTransition:'bounceOut';

        })

        $('button.prev').click(function() {
            owlSeta.trigger('prev.owl.carousel', [600]);
        })
        // fim carousel

    });
    $('.caro3d').owlCarousel({
        stagePadding: 200,
        loop:true,
        margin:10,
        nav:false,
        items:1,
        lazyLoad: true,
        nav:true
        // responsive:{
        //     0:{
        //         items:1,
        //         stagePadding: 60
        //     },
        //     600:{
        //         items:1,
        //         stagePadding: 100
        //     },
        //     1000:{
        //         items:1,
        //         stagePadding: 200
        //     },
        //     1200:{
        //         items:1,
        //         stagePadding: 250
        //     },
        //     1400:{
        //         items:1,
        //         stagePadding: 300
        //     },
        //     1600:{
        //         items:1,
        //         stagePadding: 350
        //     },
        //     1800:{
        //         items:1,
        //         stagePadding: 400
        //     }
        // }
    });






$(window).resize(function(){
    menuNav();
    bannerContainer();

});

function bannerContainer() {
var containerMax = $('.container').width();
    $('.active .item').css({'width':containerMax});

};


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
