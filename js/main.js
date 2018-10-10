$(function() {
    'use strict';

    $("header ul.navbar-nav li").click(function (ee){
        // ee.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.our-news .owl-carousel').owlCarousel({
        rtl:true,
        nav:true,
        margin:25,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.our-news .owl-nav .owl-prev, .our-news .owl-nav .owl-next').empty();

    $('.various').fancybox({
        padding : 10,
        openEffect  : 'fade'
    });

    $(".nicescroll-box").niceScroll(".wrap",{cursorcolor:"#15222e",cursorwidth:"8px",background:"rgba(97,97,97,0.5)",cursorborder:"1px solid #afafaf",autohidemode:'leave'});

    // $('.alternative-classes img').click(function(){
    //     $largeimage = $(this).clone().css({height:"100%", width:"100%",opacity:"1"});
    //     $(".photo").html($largeimage);
    //     $trial=$(this).attr('src');
    // $(".photo img").attr("src", $trial);
   
    //   });
});