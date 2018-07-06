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
	
	function addPrev(type, game) {
        var imurl, imgwrap, imgel, descstring, linkstring;
        imurl = "Images/Games/" + type + "/" + game + "/game.gif";
        imgwrap = $("<div></div>").addClass("gamewrap");
        imgel = $("<div></div>").addClass("gameprev");
        imgel.click(function () {
            $(".gameprev").removeClass("selected");
            $(this).addClass("selected");
        });
        if (game === "ZombieMil") {
            imgel.addClass("selected");
        }      
        switch(game) {
            case "ZombieMil":
                descstring = "Shot Dead is an action shooter game being made in Construct 2. You take control of a stationary turret with limited vertical movement, and they must protect the land from the surge of incoming zombies. They must collect and utilize a huge variety of weapons, ranging from fist cannons to chicken launchers to parasite guns. Precise aiming and knowing when to use which weapon will ensure victory, though you must be aware of multiple types of zombies that fly, sprint, and even hurl boulders. If your turret fails to dodge and destroy the undead, then you will surely join them.";
                linkstring = "http://www.public.asu.edu/~kysun/AllGames/Militarily/";
                break;
            case "Vale":
                 descstring = "Vale takes you on a adventure filled with treacherous monsters and traps. You engage in fierce, turn-based combat in the hopes of earning riches and fabled weapons to bolster their collection. Different modes are available to you allowing them to customize your selected class (from among 9 different classes) with a huge variety of skills and stats. Tradtional rogue-like mechanics such as permadeath and random generation combined with intensive bouts of skill with a huge variety of enemies lets you build up your perfect class to take on the final boss and earn their reward."; 
                linkstring = "http://www.public.asu.edu/~kysun/AllGames/Vale/";
                break;
            case "Brad":
                descstring = "BRAD'S SLAPDOWN is a classic clicker game. You play as Brad slapping a laptop. Using the slaps, you can purchase stronger slaps and assistance in slapping. These helpers range from robots to bodybuilders to slapping machines. The goal is to eventually demolish the laptop using the ultimate slapping orbital beam satellite.";
                linkstring = "http://www.public.asu.edu/~kysun/AllGames/Brad/";
                break;
            case "Voyage":
                 descstring = "The Voygage of St. Brendan tells the tale of St. Brendan. You play as St. Brendan leading his followers through the trecherous dangers of the sea. Brendan bravely guides his followers through demons and monsters through his faith. In the game, you cannot attack. You merely protect your followers while having faith that the Lord will see your journey through. You can protect your followers and your ship by dodging and blocking incoming threats. The more you dodge, the closer you get to the end until your faith eventually pays off.";
                linkstring = "http://www.public.asu.edu/~kysun/AllGames/Brendan/";
                break;                
            case "Elysium":
                 descstring = "Elysium follows the story of a killing that happened in the Neon City. You can choose from multiple characters, each with their own reasons to pursue the killer. As you get closer to the answer, more and more questions arise. Something more sinister is happening beyond this seemingly trivial murder. The game follows a traditional horizontal SHMUP formula with added rogue-like elements. Choose from an enormous selection of abilities and powerups as you traverse through land, sky, and sea on the hunt for the truth. Along the way, you will encounter collossal bosses and other powerful enemies. Use the abilities and items you find on the way to take them out and secure victory.";
                break;
            case "GMTK":
                descstring = "Sans Grobot was made in 2 days for the Game Maker Toolkit's gamejam. The theme was to have a single control be responsible for multiple aspects of the game. In the game, you are a robot with a gun tasked with shooting monsters. There is a resource bar used for shooting, getting new guns, and dashing, and it gets filled by moving and killing enemies. Guns with randomly generated stats are occasionally dropped, and giant bosses eventually spawn. The goal is to last as long as possible while attaining the highest amount of resources possible.";
                linkstring = "http://www.public.asu.edu/~kysun/AllGames/SGHTML/";
                break;
            case "LD39":
                descstring = "Hero 2 Zero is a 2.5D traditional beat em' up made in 3 days for Ludum Dare 39 compo in collaboration with <a href = 'https://twitter.com/megaweezl'>megawzl</a> and <a href = 'https://twitter.com/ambivorous'>ambivorous.</a> I was responsible for scripting the structure and mechanics for the game, while the other developers were responsible for the art. The game's main protagonist is a middled aged main on his journey of deterioration into alcoholism to match the gamejam theme of losing energy. You run around assaulting the homeless and can juggle them in the air with punches and thrown bottles for massive combos. The game features varied and destructable environments. At the end, you encounter your old lover whom you must defeat to complete your journey.";
                linkstring = "https://yaomon.itch.io/hero-2-zero";
                break;
            case "Curveball":
                descstring = "Curvball is a game made in 2 days using the trial version of Game Maker Studio 2 and published with the full version. It's main purpose was to learn GMS2 in perpartion for teaching the engine. Outwardly it appears to be a simple take on the much adored Pong, but the mechanics behind the full game vary drastically. The ball can be curved, sliced, angled and aimed for an extreme amount of skill expression. 3 types of paddles, the slow big paddle, the fast small paddle, and the average paddle, can be paired with 3 skills, hit the ball harder with correct timing, otemporarily extend the paddle size, and get a small burst of speed. With these added twists on an old favorite, Curveball is a fresh new take on the time-tested experience of Pong. Local multiplayer and matchs against a CPU AI are available.";
                linkstring = "https://yaomon.itch.io/curveball";
                break;
            default:
                descstring = "";
                break;                 
        }
        imgel.click(function () {
            $("#codeprev").css("background-image", $(this).css("background-image"));
            var image = new Image();
            image.src = $(this).css("background-image").match(/^url\(["']?(.+?)["']?\)$/)[1];
            $("#gametitle").attr("src", "Images/Games/" + type + "/" + game + "/t.gif");
            $("#descpara").html(descstring);
            $("#gamelink").attr("href", linkstring);
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
            addPrev("Construct", "ZombieMil");
            addPrev("Construct", "Vale");
            addPrev("Construct", "Brad");
            addPrev("Construct", "Voyage");  
            $(this).addClass("selected");
        });
        
        $("#codetab2").click(function () {
            $("#codegal").html("");
            addPrev("GameMaker", "Elysium");
            addPrev("GameMaker", "GMTK");
            addPrev("GameMaker", "LD39");
            addPrev("GameMaker", "Curveball");
        });
        
        $(".codetab").click(function () {
            $(".codetab").removeClass("selected");
            $(this).addClass("selected");
        });
        $("#codeprev").css("background-image", "url(Images/Games/Construct/ZombieMil/game.gif)");
        addPrev("Construct", "ZombieMil");
        addPrev("Construct", "Vale");
        addPrev("Construct", "Brad");
        addPrev("Construct", "Voyage");  
        redraw();        
        $("#codegal").on("mousewheel", scrollHorizontally);
        // Firefox
        $("#codegal").on("DOMMouseScroll", scrollHorizontally);
    };
	
	
}());