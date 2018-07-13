/*jslint browser: true*/
/*global $, jQuery, alert*/
(function () {
    "use strict";
    var scroll1art, scroll2art, scroll3art, scroll1artcounter = 0, scroll2artcounter = 0, scroll3artcounter = 0, category = "pixel",
        charImages = 34,
        effImages = 14,
        objImages = 15,
        sceneImages = 18,
        digImages = 12,
        TDImages = 12;
    
    function redrawFullImg(bgwidth, bgheight) {
        switch (category) {
        case "pixel":
            $("#fullimg").css("image-rendering", "pixelated");
            if ((bgheight * 3.1) < $("#fullimgcont").height() && (bgwidth * 3.1) < $("#fullimgcont").width()) {
                $("#fullimg").css("background-size", bgwidth * 3 + "px " + bgheight * 3 + "px");
                $("#fullimg").css("width", bgwidth * 3 + "px ");
                $("#fullimg").css("height", bgheight * 3 + "px");
            } else if ((bgheight * 2.1) < $("#fullimgcont").height() && (bgwidth * 2.1) < $("#fullimgcont").width()) {
                $("#fullimg").css("background-size", bgwidth * 2 + "px " + bgheight * 2 + "px");
                $("#fullimg").css("width", bgwidth * 2 + "px ");
                $("#fullimg").css("height", bgheight * 2 + "px");
            } else {
                $("#fullimg").css("background-size", bgwidth + "px " + bgheight + "px");
                $("#fullimg").css("width", bgwidth + "px ");
                $("#fullimg").css("height", bgheight + "px");
            }
            break;
        case "digital":
            $("#fullimg").css("width", "100%");
            $("#fullimg").css("height", "100%");
            $("#fullimg").css("background-size", "contain");
            $("#fullimg").css("image-rendering", "auto");
            break;
        case "3D":
            $("#fullimg").css("width", "100%");
            $("#fullimg").css("height", "100%");
            $("#fullimg").css("background-size", "contain");
            $("#fullimg").css("image-rendering", "auto");
            break;
        default:
            $("#fullimg").css("width", "100%");
            $("#fullimg").css("height", "100%");
            $("#fullimg").css("background-size", "contain");
            $("#fullimg").css("image-rendering", "auto");
        }
    }
    
	function redraw() {
        $(".arttab").each(function (index) {
            // Set tab right skew angle
            $(this).css("transform", "skewY(" + (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-webkit-transform", "skewY(" + (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))  + "deg)");
            $(this).css("-moz-transform", "skewY(" + (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))  + "deg)");
            $(this).css("-ms-transform", "skewY(" + (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))  + "deg)");
            $(this).css("-o-transform", "skewY(" + (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))  + "deg)");
        });
        $(".artbg").each(function (index) {
            // Set picture counter skew
            $(this).css("transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-webkit-transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-moz-transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-ms-transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-o-transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
        });
        $(".arttext").each(function (index) {
            // Set text counter skew
            $(this).css("transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-webkit-transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-moz-transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-ms-transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
            $(this).css("-o-transform", "skewY(" + -(window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
        });
        $(".catbutt").each(function (index) {
            // Set category buttons counter skew
            $(this).css("transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
            $(this).css("-webkit-transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
            $(this).css("-moz-transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
            $(this).css("-ms-transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
            $(this).css("-o-transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        });
        $("#categories").css("transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        $("#categories").css("-webkit-transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        $("#categories").css("-moz-transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        $("#categories").css("-ms-transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        $("#categories").css("-o-transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");

        if (category === "pixel") {
            var image = new Image();
            image.src = $("#fullimg").css("background-image").match(/^url\(["']?(.+?)["']?\)$/)[1];
            $(image).load(function () {
                redrawFullImg(image.width, image.height);
            });
        }
    }
    
    function scroll1artf() {
        if (scroll1artcounter === 1200) {
            scroll1artcounter = 0;
        }
        $("#artbg1").css("transform", "translate(0px, " + -scroll1artcounter + "px) skewY(" + (-window.innerHeight / 47.45 - (window.innerWidth / 96 - 20)) + "deg)");
        $("#artbg1").css("-webkit-transform", "translate(0px, " + -scroll1artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg1").css("-moz-transform", "translate(0px, " + -scroll1artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg1").css("-ms-transform", "translate(0px, " + -scroll1artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg1").css("-o-transform", "translate(0px, " + -scroll1artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        scroll1artcounter += 1;
    }
    
    function scroll2artf() {
        if (scroll2artcounter === 1200) {
            scroll2artcounter = 0;
        }
        $("#artbg2").css("transform", "translate(0px, " + -scroll2artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg2").css("-webkit-transform", "translate(0px, " + -scroll2artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg2").css("-moz-transform", "translate(0px, " + -scroll2artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg2").css("-ms-transform", "translate(0px, " + -scroll2artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg2").css("-o-transform", "translate(0px, " + -scroll2artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        scroll2artcounter += 1;
    }
    
    function scroll3artf() {
        if (scroll3artcounter === 1200) {
            scroll3artcounter = 0;
        }
        $("#artbg3").css("transform", "translate(0px, " + -scroll3artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg3").css("-webkit-transform", "translate(0px, " + -scroll3artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg3").css("-moz-transform", "translate(0px, " + -scroll3artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg3").css("-ms-transform", "translate(0px, " + -scroll3artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        $("#artbg3").css("-o-transform", "translate(0px, " + -scroll3artcounter + "px) skewY(" + -window.innerHeight / 47.45 + "deg)");
        scroll3artcounter += 1;
    }
    
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        $("#gallery").scrollLeft($("#gallery").scrollLeft() - (delta * 60));
        e.preventDefault();
    }
    
    function scrollGal(amount) {
        $("#gallery").scrollLeft($("#gallery").scrollLeft() + amount);
    }
    
    function addPrev(cat, num, scrollNum, type, format) {
        var imurl, imgwrap, imgel;
        imurl = "Images/Gallery/" + type + "/" + cat + num + format;
        imgwrap = $("<div></div>").addClass("imgwrap");
        imgel = $("<div></div>").addClass("preview");
        imgel.click(function () {
            $(".preview").removeClass("selected");
            $(this).addClass("selected");
        });
        if (num === 1 && cat === "c") {
            imgel.addClass("selected");
        }
        imgwrap.addClass("noselect");
        imgel.css("background-image", "url(" + imurl + ")");
        imgwrap.append(imgel);
        imgel.click(function () {
            $("#fullimg").css("background-image", $(this).css("background-image"));
            var image = new Image(), index = $(this).css("background-image").match(/\d+/)[0];
            image.src = $(this).css("background-image").match(/^url\(["']?(.+?)["']?\)$/)[1];
            $(image).load(function () {
                redrawFullImg(image.width, image.height);
            });
            $("#gallery").animate({scrollLeft: this.parentElement.offsetWidth * (scrollNum + parseInt(index, 10) - 1)}, 400, "swing");
        });
        $("#gallery").append(imgwrap);
    }
    
    function setGalPixel() {
        var i;
        $("#categories").html('<button class = "catbutt noselect" id = "catchar">CHARACTER</button><button class = "catbutt noselect" id = "catobj">OBJECT</button><button class = "catbutt noselect" id = "cateff">EFFECTS</button><button class = "catbutt noselect" id = "catscene">SCENES</button>');
        $("#catchar").click(function () {
            $("#fullimg").css("background-image", "url(Images/Gallery/Pixel/c1.gif)");
            $("#gallery").animate({scrollLeft: 0}, 300, "swing");
            var image = new Image();
            image.src = "Images/Gallery/Pixel/c1.gif";
            $(image).load(function () {
                redrawFullImg(image.width, image.height);
            });
        });
        $("#catobj").click(function () {
            $("#fullimg").css("background-image", "url(Images/Gallery/Pixel/o1.gif)");
            $("#gallery").animate({scrollLeft: document.getElementsByClassName("imgwrap")[0].offsetWidth * (charImages)}, 300, "swing");
            var image = new Image();
            image.src = "Images/Gallery/Pixel/o1.gif";
            $(image).load(function () {
                redrawFullImg(image.width, image.height);
            });
        });
        
        $("#cateff").click(function () {
            $("#fullimg").css("background-image", "url(Images/Gallery/Pixel/f1.gif)");
            $("#gallery").animate({scrollLeft: document.getElementsByClassName("imgwrap")[0].offsetWidth * (charImages + objImages)}, 300, "swing");
            var image = new Image();
            image.src = "Images/Gallery/Pixel/f1.gif";
            $(image).load(function () {
                redrawFullImg(image.width, image.height);
            });
        });
                           
        $("#catscene").click(function () {
            $("#fullimg").css("background-image", "url(Images/Gallery/Pixel/s1.gif)");
            $("#gallery").animate({scrollLeft: document.getElementsByClassName("imgwrap")[0].offsetWidth * (charImages + objImages + effImages)}, 300, "swing");
            var image = new Image();
            image.src = "Images/Gallery/Pixel/s1.gif";
            $(image).load(function () {
                redrawFullImg(image.width, image.height);
            });
        });
        
        $(".catbutt").each(function (index) {
            // Set category buttons counter skew
            $(this).css("transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
            $(this).css("-webkit-transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
            $(this).css("-moz-transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
            $(this).css("-ms-transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
            $(this).css("-o-transform", "skewX(" + -(90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        });
        $("#categories").css("transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        $("#categories").css("-webkit-transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        $("#categories").css("-moz-transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        $("#categories").css("-ms-transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        $("#categories").css("-o-transform", "skewX(" + (90 - (window.innerHeight / 47.45 - (window.innerWidth / 96 - 20))) + "deg)");
        
        $("#gallery").html("");
        for (i = 1; i <= charImages; i += 1) {
            addPrev("c", i, 0, "Pixel", ".gif");
        }
        for (i = 1; i <= objImages; i += 1) {
            addPrev("o", i, charImages, "Pixel", ".gif");
        }
        for (i = 1; i <= effImages; i += 1) {
            addPrev("f", i, charImages + objImages, "Pixel", ".gif");
        }
        for (i = 1; i <= sceneImages; i += 1) {
            addPrev("s", i, charImages + objImages + effImages, "Pixel", ".gif");
        }
        $("#gallery").animate({scrollLeft: 0}, 400, "swing");
    }
    
    function setGalDigital() {
        var i;
        $("#categories").html("");
        $("#gallery").html("");
        for (i = 1; i <= digImages; i += 1) {
            addPrev("", i, 0, "Digital", ".png");
        }
        $("#gallery").animate({scrollLeft: 0}, 400, "swing");
    }
    
    function setGalTD() {
        var i;
        $("#categories").html("");
        $("#gallery").html("");
        for (i = 1; i <= TDImages; i += 1) {
            addPrev("", i, 0, "TD", ".gif");
        }
        $("#gallery").animate({scrollLeft: 0}, 400, "swing");
    }

    window.onresize = redraw;
    window.onload = function () {
        scroll1art = setInterval(scroll1artf, 60);
        $("#tabart1").hover(function () {
            $("#artbg1").css("background-image", "url(Images/Banners/PixelBannerO.png)");
            clearInterval(scroll1art);
        }, function () {
            $("#artbg1").css("background-image", "url(Images/Banners/PixelBanner.png)");
            scroll1art = setInterval(scroll1artf, 60);
        });
        
        scroll2art = setInterval(scroll2artf, 50);
        $("#tabart2").hover(function () {
            $("#artbg2").css("background-image", "url(Images/Banners/DigitalBannerO.png)");
            clearInterval(scroll2art);
        }, function () {
            $("#artbg2").css("background-image", "url(Images/Banners/DigitalBanner.png)");
            scroll2art = setInterval(scroll2artf, 50);
        });
        
        scroll3art = setInterval(scroll3artf, 70);
        $("#tabart3").hover(function () {
            $("#artbg3").css("background-image", "url(Images/Banners/3DBannerO.png)");
            clearInterval(scroll3art);
        }, function () {
            $("#artbg3").css("background-image", "url(Images/Banners/3DBanner.png)");
            scroll3art = setInterval(scroll3artf, 70);
        });

        $("#fullimg").css("background-image", "url(Images/Gallery/Pixel/c1.gif)");
        var image = new Image();
        image.src = "Images/Gallery/Pixel/c1.gif";
        redrawFullImg(image.width, image.height);
        
        $(".arttab").click(function () {
            $(".arttab").removeClass("selected");
            $(this).addClass("selected");
        });
        
        $("#tabart1").click(function () {
            setGalPixel();
            category = "pixel";
            $("#fullimg").css("background-image", "url(Images/Gallery/Pixel/c1.gif)");
            var image = new Image();
            image.src = "Images/Gallery/Pixel/c1.gif";
            redrawFullImg(image.width, image.height);
        });
            
        $("#tabart2").click(function () {
            setGalDigital();
            category = "digital";
            $("#fullimg").css("background-image", "url(Images/Gallery/Digital/1.png)");
            var image = new Image();
            image.src = "Images/Gallery/Digital/1.png";
            redrawFullImg(image.width, image.height);
        });
        
        $("#tabart3").click(function () {
            setGalTD();
            category = "3D";
            $("#fullimg").css("background-image", "url(Images/Gallery/TD/1.gif)");
            var image = new Image();
            image.src = "Images/Gallery/TD/1.gif";
            redrawFullImg(image.width, image.height);
        });

        $(".arttext").click(function () {
            $(".arttext").removeClass("selected");
            $(this).addClass("selected");
        });

        setGalPixel();
        
        redraw();
        
        $("#gallery").on("mousewheel", scrollHorizontally);
        // Firefox
        $("#gallery").on("DOMMouseScroll", scrollHorizontally);
    };
}());