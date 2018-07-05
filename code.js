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
        
        $("#codeprev").css("transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$("#codeprev").css("-webkit-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$("#codeprev").css("-moz-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$("#codeprev").css("-ms-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$("#codeprev").css("-o-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
        
        $("#codedesc").css("transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$("#codedesc").css("-webkit-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$("#codedesc").css("-moz-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$("#codedesc").css("-ms-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$("#codedesc").css("-o-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
        
        $(".gameprev").css("transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$(".gameprev").css("-webkit-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$(".gameprev").css("-moz-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$(".gameprev").css("-ms-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
		$(".gameprev").css("-o-transform", "skewX(" + window.innerWidth  / 192 + "deg)");
    }
	
	    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        $("#gallery").scrollLeft($("#gallery").scrollLeft() - (delta * 60));
        e.preventDefault();
    }
	
	function addPrev(cat, num, type, game) {
        var imurl, imgwrap, imgel, descstring;
        imurl = "Images/Games/" + type + "/" + game + "/" + cat + num + ".gif";
        imgwrap = $("<div></div>").addClass("gamewrap");
        imgel = $("<div></div>").addClass("gameprev");
        imgel.click(function () {
            $(".gameprev").removeClass("selected");
            $(this).addClass("selected");
        });
        if (num === 1 && game === "ZombieMil") {
            imgel.addClass("selected");
        }      
        switch(game) {
            case "ZombieMil":
                descstring = "Shot Dead is an action shooter game being made in Construct 2. You take control of a stationary turret with limited vertical movement, and they must protect the land from the surge of incoming zombies. They must collect and utilize a huge variety of weapons, ranging from fist cannons to chicken launchers to parasite guns. Precise aiming and knowing when to use which weapon will ensure victory, though you must be aware of multiple types of zombies that fly, sprint, and even hurl boulders. If your turret fails to dodge and destroy the undead, then you will surely join them.";              
                break;
            case "Vale":
                 descstring = "Vale takes you on a adventure filled with treacherous monsters and traps. You engage in fierce, turn-based combat in the hopes of earning riches and fabled weapons to bolster their collection. Different modes are available to you allowing them to customize your selected class (from among 9 different classes) with a huge variety of skills and stats. Tradtional rogue-like mechanics such as permadeath and random generation combined with intensive bouts of skill with a huge variety of enemies lets you build up your perfect class to take on the final boss and earn their reward."; 
                break;
            case "Brad":
                descstring = "BRAD'S SLAPDOWN is a classic clicker game. You play as Brad slapping a laptop. Using the slaps, you can purchase stronger slaps and assistance in slapping. These helpers range from robots to bodybuilders to slapping machines. The goal is to eventually demolish the laptop using the ultimate slapping orbital beam satellite.";
                break;
            case "Voyage":
                 descstring = "The Voygage of St. Brendan tells the tale of St. Brendan. You play as St. Brendan leading his followers through the trecherous dangers of the sea. Brendan bravely guides his followers through demons and monsters through his faith. In the game, you cannot attack. You merely protect your followers while having faith that the Lord will see your journey through. You can protect your followers and your ship by dodging and blocking incoming threats. The more you dodge, the closer you get to the end until your faith eventually pays off.";
                break;                
            case "Elysium":
                 descstring = "Elysium follows the story of a killing that happened in the Neon City. You can choose from multiple characters, each with their own reasons to pursue the killer. As you get closer to the answer, more and more questions arise. Something more sinister is happening beyond this seemingly trivial murder. The game follows a traditional horizontal SHMUP formula with added rogue-like elements. Choose from an enormous selection of abilities and powerups as you traverse through land, sky, and sea on the hunt for the truth. Along the way, you will encounter collossal bosses and other powerful enemies. Use the abilities and items you find on the way to take them out and secure victory.";
                break;
            default:
                descstring = ""; 
                break;                 
        }
        imgel.click(function () {
            $("#codeprev").css("background-image", $(this).css("background-image"));
            var image = new Image(), index = $(this).css("background-image").match(/\d+/)[0];
            image.src = $(this).css("background-image").match(/^url\(["']?(.+?)["']?\)$/)[1];
            $("#gametitle").attr("src", "Images/Games/" + type + "/" + game + "/t.png");
            $("#descpara").html(descstring);
        });  
        
        imgwrap.addClass("noselect");
        imgel.css("background-image", "url(" + imurl + ")");
        imgwrap.append(imgel);        
        $("#codegal").append(imgwrap);
    }
	
	window.onresize = redraw;
    window.onload = function () {              
        $("#codetab1").click(function () {
            $("#codegal").html("");
            addPrev("c", 1, "Construct", "ZombieMil");
            addPrev("vl", 1, "Construct", "Vale");
            addPrev("b", 1, "Construct", "Brad");
            addPrev("b", 1, "Construct", "Voyage");  
        });
        
        $("#codetab2").click(function () {
            $("#codegal").html("");
            addPrev("e", 1, "GameMaker", "Elysium");
        });
        
        addPrev("c", 1, "Construct", "ZombieMil");
        addPrev("vl", 1, "Construct", "Vale");
        addPrev("b", 1, "Construct", "Brad");
        addPrev("b", 1, "Construct", "Voyage");  
        redraw();        
        $("#codegal").on("mousewheel", scrollHorizontally);
        // Firefox
        $("#codegal").on("DOMMouseScroll", scrollHorizontally);
    };
	
	
}());