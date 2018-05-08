/*jslint browser: true*/
/*global $, jQuery, alert*/
(function () {
    "use strict";
    var scroll1, scroll2, scroll3, scroll4, scroll1counter = 0, scroll2counter = 0, scroll3counter = 0, scroll4counter = 0;

	function redraw() {
        $(".maintab").each(function (index) {
            // Set tab right skew angle
            $(this).css("transform", "skewX(" + window.innerWidth  / 96 + "deg)");
            $(this).css("-webkit-transform", "skewX(" + window.innerWidth  / 96 + "deg)");
            $(this).css("-moz-transform", "skewX(" + window.innerWidth  / 96 + "deg)");
            $(this).css("-ms-transform", "skewX(" + window.innerWidth  / 96 + "deg)");
            $(this).css("-o-transform", "skewX(" + window.innerWidth  / 96 + "deg)");
        });
        $(".bgpic").each(function (index) {
            // Set picture counter skew
            $(this).css("transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
            $(this).css("-webkit-transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
            $(this).css("-moz-transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
            $(this).css("-ms-transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
            $(this).css("-o-transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
        });
        $(".maintext").each(function (index) {
            // Set text counter skew
            $(this).css("transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
            $(this).css("-webkit-transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
            $(this).css("-moz-transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
            $(this).css("-ms-transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
            $(this).css("-o-transform", "skewX(" + -window.innerWidth  / 96 + "deg)");
        });
    }
    
    function scroll1f() {
        if (scroll1counter === 1200) {
            scroll1counter = 0;
        }
        $("#bg1").css("transform", "translate(" + -scroll1counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg1").css("-webkit-transform", "translate(" + -scroll1counter + "px) skewX(" + -window.innerWidth  / 96 + "deg)");
        $("#bg1").css("-moz-transform", "translate(" + -scroll1counter + "px) skewX(" + -window.innerWidth  / 96 + "deg)");
        $("#bg1").css("-ms-transform", "translate(" + -scroll1counter + "px) skewX(" + -window.innerWidth  / 96 + "deg)");
        $("#bg1").css("-o-transform", "translate(" + -scroll1counter + "px) skewX(" + -window.innerWidth  / 96 + "deg)");
        scroll1counter += 1;
    }
    
    function scroll2f() {
        if (scroll2counter === 1575) {
            scroll2counter = 0;
        }
        $("#bg2").css("transform", "translate(" + -scroll2counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg2").css("-webkit-transform", "translate(" + -scroll2counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg2").css("-moz-transform", "translate(" + -scroll2counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg2").css("-ms-transform", "translate(" + -scroll2counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg2").css("-o-transform", "translate(" + -scroll2counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        scroll2counter += 1;
    }
    
    function scroll3f() {
        if (scroll3counter === 830) {
            scroll3counter = 0;
        }
        $("#bg3").css("transform", "translate(" + -scroll3counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg3").css("-webkit-transform", "translate(" + -scroll3counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg3").css("-moz-transform", "translate(" + -scroll3counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg3").css("-ms-transform", "translate(" + -scroll3counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg3").css("-o-transform", "translate(" + -scroll3counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        scroll3counter += 1;
    }
    
    function scroll4f() {
        if (scroll4counter === 983) {
            scroll4counter = 0;
        }
        $("#bg4").css("transform", "translate(" + -scroll4counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg4").css("-webkit-transform", "translate(" + -scroll4counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg4").css("-moz-transform", "translate(" + -scroll4counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg4").css("-ms-transform", "translate(" + -scroll4counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        $("#bg4").css("-o-transform", "translate(" + -scroll4counter + "px) skewX(" + -window.innerWidth / 96 + "deg)");
        scroll4counter += 1;
    }
    
    window.onresize = redraw;
    window.onload = function () {
        redraw();
        scroll1 = setInterval(scroll1f, 50);
        $("#tab1").hover(function () {
            $("#bg1").css("background-image", "url(Images/Banners/ArtBannerO.png)");
            clearInterval(scroll1);
        }, function () {
            $("#bg1").css("background-image", "url(Images/Banners/ArtBanner.png)");
            scroll1 = setInterval(scroll1f, 50);
        });
        
        scroll2 = setInterval(scroll2f, 60);
        $("#tab2").hover(function () {
            $("#bg2").css("background-image", "url(Images/Banners/CodeBannerO.png)");
            clearInterval(scroll2);
        }, function () {
            $("#bg2").css("background-image", "url(Images/Banners/CodeBanner.png)");
            scroll2 = setInterval(scroll2f, 60);
        });
        
        scroll3 = setInterval(scroll3f, 70);
        $("#tab3").hover(function () {
            $("#bg3").css("background-image", "url(Images/Banners/HireBannerO.png)");
            clearInterval(scroll3);
        }, function () {
            $("#bg3").css("background-image", "url(Images/Banners/HireBanner.png)");
            scroll3 = setInterval(scroll3f, 70);
        });
        
        scroll4 = setInterval(scroll4f, 60);
        $("#tab4").hover(function () {
            $("#bg4").css("background-image", "url(Images/Banners/InfoBannerO.png)");
            clearInterval(scroll4);
        }, function () {
            $("#bg4").css("background-image", "url(Images/Banners/InfoBanner.png)");
            scroll4 = setInterval(scroll4f, 60);
        });
    };
    
}());