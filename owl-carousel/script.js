$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        autoPlay: 3000


    });

    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.next');
    });





        $("#owl-demo2").owlCarousel({
            singleItem: false,
            items : 3,
            navigation : true
        });


});