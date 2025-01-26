$(window).on("load", function() {
    "use strict";

    //  =============== MOBILE MENU SCRIPT FUNCTION ================= 


    $(".menu-btn").on("click", function() {
        $(this).toggleClass("active");
        $(".mobile-menu").toggleClass("active");
    });

    //  =============== ADDING WHITE BOX UNTIL PAGE IS FULLY LOADED ================= 

    $(".banner-section").removeClass("white-box");

    //  =============== GETTING CONTAINER WIDTH ================= 

    var offset = $(".container").offset().left;

    //  =============== SETTING BANNER DOTS CONTROLS ================= 

    if ($(window).width() > 1920) {
        $(".banner-section.style3 .slick-prev, .banner-section.style2 .slick-prev").css({
            "left": offset
        });
        $(".banner-section.style3 .slick-next, .banner-section.style2 .slick-next").css({
            "right": offset
        });
    };

    $(".slick-dots, .banner-slider.style1 .slick-next, .banner-slider.style1 .slick-prev").css({
        "right": offset
    });

    var slider_dots_width = $(".banner-slider.style1 .slick-dots").width();
    $(".banner-slider.style1 .slick-prev").css({
        "margin-right": slider_dots_width + 97
    });

    //  ============ SUB MEN ================ 

    $("nav ul ul").parent().addClass("has-childs");

    //  ============ MOBILE MENU ================ 

    $(".mobile-menu ul ul").parent().addClass("menu-item-has-children");
    $(".mobile-menu ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });

    $(".menu-btn").on("click", function() {
        $(".mobile-menu").toggleClass("show");
    });

    $("html").on("click", function() {
        $(".mobile-menu").removeClass("show");
    });

    $(".menu-btn, .mobile-menu").on("click", function(e) {
        e.stopPropagation();
    });

    //  ==================== SCROLL TO TOP  ====================

    $(".scrollUp").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //  ==================== SEARCH POPUP  ====================

    $(".search-btn").on("click", function() {
        $(".search-popup").addClass("show");
    });
    $(".close-search").on("click", function() {
        $(".search-popup").removeClass("show");
    });


    //  ============= PRICES TAB FUNCTIONALITY =========

    $('.price-nav-tabs ul li').on("click", function() {
        var tab_id = $(this).attr('data-tab');
        $('.price-nav-tabs ul li').removeClass('current');
        $('.price-tabless-content').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#" + tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= LANGUAGE SELECT =========

    $(".lang-slct > span").on("click", function() {
        $(this).toggleClass("active");
        $(".drop-menu").toggleClass("active");
    });


});