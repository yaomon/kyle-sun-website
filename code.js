/*jslint browser: true*/
/*global $, jQuery, alert*/
(function () {
    "use strict";
    //A simple game of snake made with Javascript, CSS, and HTML. Graphics are drawn using HTML DOM elements.
    
	function redraw() {
        $(".codetab").each(function (index) {
            // Set tab right skew angle
            $(this).css("transform", "skewX(" + window.innerWidth  / -192 + "deg)");
            $(this).css("-webkit-transform", "skewX(" + window.innerWidth  / -192 + "deg)");
            $(this).css("-moz-transform", "skewX(" + window.innerWidth  / -192 + "deg)");
            $(this).css("-ms-transform", "skewX(" + window.innerWidth  / -192 + "deg)");
            $(this).css("-o-transform", "skewX(" + window.innerWidth  / -192 + "deg)");
        });
        $("#gamegal").css("transform", "skewX(" + window.innerWidth  / -192 + "deg)");
		$("#gamegal").css("-webkit-transform", "skewX(" + window.innerWidth  / -192 + "deg)");
		$("#gamegal").css("-moz-transform", "skewX(" + window.innerWidth  / -192 + "deg)");
		$("#gamegal").css("-ms-transform", "skewX(" + window.innerWidth  / -192 + "deg)");
		$("#gamegal").css("-o-transform", "skewX(" + window.innerWidth  / -192 + "deg)");
    }
	
	    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        $("#gallery").scrollLeft($("#gallery").scrollLeft() - (delta * 60));
        e.preventDefault();
    }
	
	function addPrev(cat, num, type, scrollNum) {
        var imurl, imgwrap, imgel;
        imurl = "Images/Gallery/" + type + "/" + cat + num + ".gif";
        imgwrap = $("<div></div>").addClass("imgwrap");
        imgel = $("<div></div>").addClass("preview");
        imgel.click(function () {
            $(".preview").removeClass("selected");
            $(this).addClass("selected");
        });
        if (num === 1) {
            imgel.addClass("selected");
        }
        imgwrap.addClass("noselect");
        imgel.css("background-image", "url(" + imurl + ")");
        imgwrap.append(imgel);
        imgel.click(function () {
            $("#codeprev").css("background-image", $(this).css("background-image"));
            var image = new Image(), index = $(this).css("background-image").match(/\d+/)[0];
            image.src = $(this).css("background-image").match(/^url\(["']?(.+?)["']?\)$/)[1];
            $("#codegal").animate({scrollLeft: 192.5 * (scrollNum + parseInt(index, 10) - 1)}, 400, "swing");
        });
        $("#codegal").append(imgwrap);
    }
	
	window.onresize = redraw;
    window.onload = function () {
       
        redraw();
        
        $("#codegal").on("mousewheel", scrollHorizontally);
        // Firefox
        $("#codegal").on("DOMMouseScroll", scrollHorizontally);
    };
	
	
}());