/*jslint browser: true*/
/*global $, jQuery, alert*/
(function () {
    "use strict";
    var scroll1, scroll2, scroll3, scroll4, scroll1counter = 0, scroll2counter = 0, scroll3counter = 0, scroll4counter = 0, slidecounter = 0, category,
        slides = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "d1", "d2", "d3", "t1"];
    slides = shuffle(slides);
    
    // Resizes the fullimg preview proportionally to the size of the image given in the parameters and the window size.
    function redrawFullImg(bgwidth, bgheight) {
        switch (category) {
        case "pixel":
            $("#slideshow").css("image-rendering", "pixelated");
            if ((bgheight * 3.1) < $("#slideshowcont").height() && (bgwidth * 3.1) < $("#slideshowcont").width()) {
                $("#slideshow").css("background-size", bgwidth * 3 + "px " + bgheight * 3 + "px");
                $("#slideshow").css("width", bgwidth * 3 + "px ");
                $("#slideshow").css("height", bgheight * 3 + "px");
            } else if ((bgheight * 2.1) < $("#slideshowcont").height() && (bgwidth * 2.1) < $("#slideshowcont").width()) {
                $("#slideshow").css("background-size", bgwidth * 2 + "px " + bgheight * 2 + "px");
                $("#slideshow").css("width", bgwidth * 2 + "px ");
                $("#slideshow").css("height", bgheight * 2 + "px");
            } else {
                $("#slideshow").css("background-size", bgwidth + "px " + bgheight + "px");
                $("#slideshow").css("width", bgwidth + "px ");
                $("#slideshow").css("height", bgheight + "px");
            }
            break;
        case "digital":
            $("#slideshow").css("width", "100%");
            $("#slideshow").css("height", "100%");
            $("#slideshow").css("background-size", "contain");
            $("#slideshow").css("image-rendering", "auto");
            break;
        case "3D":
            $("#slideshow").css("width", "100%");
            $("#slideshow").css("height", "100%");
            $("#slideshow").css("background-size", "contain");
            $("#slideshow").css("image-rendering", "auto");
            break;
        default:
            $("#slideshow").css("width", "100%");
            $("#slideshow").css("height", "100%");
            $("#slideshow").css("background-size", "contain");
            $("#slideshow").css("image-rendering", "auto");
        }
    }
    
    // Redo the skewing of each skewed element as to line up accodring to the window width and height;
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
        if (category === "pixel") {
            var image = new Image();
            image.src = $("#slideshow").css("background-image").match(/^url\(["']?(.+?)["']?\)$/)[1];
            $(image).load(function () {
                redrawFullImg(image.width, image.height);
            });
        }
    }
    
    // Functions to scroll the background on the category tabs.
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
    
    // Change the slide picture.
    function slideChange() {
        slidecounter += 1;
        var newPic = slides[slidecounter % slides.length], imurl = "url(Images/Gallery/Featured/", image, bgwidth, bgheight;
        if (newPic.startsWith("d")) {
            imurl += newPic + ".png)";
            category = "digital";
            $("#slideshow").css("width", "100%");
            $("#slideshow").css("height", "100%");
            $("#slideshow").css("background-size", "contain");
            $("#slideshow").css("image-rendering", "auto");
            $("#slideshow").css("background-image", imurl);
        } else if (newPic.startsWith("t")) {
            imurl += newPic + ".gif)";
            category = "3D";
            $("#slideshow").css("width", "100%");
            $("#slideshow").css("height", "100%");
            $("#slideshow").css("background-size", "contain");
            $("#slideshow").css("image-rendering", "auto");
            $("#slideshow").css("background-image", imurl);
        } else {
            imurl = "Images/Gallery/Featured/" + newPic + ".gif";
            category = "pixel";
            image = new Image();
            image.src = imurl;
            $(image).load(function () {
                bgwidth = image.width;
                bgheight = image.height;
                $("#slideshow").css("image-rendering", "pixelated");
                if ((bgheight * 3.1) < $("#slideshowcont").height() && (bgwidth * 3.1) < $("#slideshowcont").width()) {
                    $("#slideshow").css("background-size", bgwidth * 3 + "px " + bgheight * 3 + "px");
                    $("#slideshow").css("width", bgwidth * 3 + "px ");
                    $("#slideshow").css("height", bgheight * 3 + "px");
                } else if ((bgheight * 2.1) < $("#slideshowcont").height() && (bgwidth * 2.1) < $("#slideshowcont").width()) {
                    $("#slideshow").css("background-size", bgwidth * 2 + "px " + bgheight * 2 + "px");
                    $("#slideshow").css("width", bgwidth * 2 + "px ");
                    $("#slideshow").css("height", bgheight * 2 + "px");
                } else {
                    $("#slideshow").css("background-size", bgwidth + "px " + bgheight + "px");
                    $("#slideshow").css("width", bgwidth + "px ");
                    $("#slideshow").css("height", bgheight + "px");
                }
                $("#slideshow").css("image-rendering", "pixelated");
                imurl = "url(" + imurl + ")";
                $("#slideshow").css("background-image", imurl);
            });
        }
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
        slideChange();
        setInterval(slideChange, 5000);
    };
    
    //Function that takes in an array and randomly orders its elements.
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

}());