var canvasw = 640;
var canvash = 480;

var canvas;
var stage;
<<<<<<< HEAD
var gamestate;

//debug
var showgrid = true;

//UI SETTINGS
var textcolor		= "#FFF";
var textfont		= "32px Arial";
var scorefont		= "20px Arial"

var fillcolor 		= "#0AC";
var fillalpha		= 0.4;

var bordercolor		= "#888";
var borderwidth		= 4;

var piecesize		= 50;

var boardwidth 		= 400;
var boardheight		= 400;
var boardx			= 210;
var boardy			= 40;

var nextpiecew		= 150;
var nextpieceh		= 275;
var nextpiecex		= 30;
var nextpiecey		= 40;

var scorew			= 150;
var scoreh			= 100;
var scorex			= 30;
var scorey			= 340;

//GAME SETTINGS
var fps 			= 60;
var bbw				= 25;	//BOARD BLOCK WIDTH
var bbh				= 25;	//BOARD BLOCK HEIGHT

//BACKGROUNDS
var background1;
var background2;
var background3;

//	MENU
var title;
var menubackground;
var playbutton;
var normalbutton;
var hardbutton;

//	CREDITS
var creditsscreen;

//	GAME
var playerpaddle;
var normalbuttonpaddle;
var mediumpaddle;
var hardpaddle;
var win;
var lose;

var score;
var speed = 3;

var xspeed;
var yspeed;

var difficulty;

//RENDERER
var ticker = new Object;
var preloader
var manifest;

//CONTAINERS
var titleview 		= new createjs.Container();
var gameview 		= new createjs.Container();
var loadingscreen 	= new createjs.Container();

//PIECE DEFINITIONS
    var i = { size: 4, blocks: [0x0F00, 0x2222, 0x00F0, 0x4444], color: 'cyan'   };
    var j = { size: 3, blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20], color: 'blue'   };
    var l = { size: 3, blocks: [0x4460, 0x0E80, 0xC440, 0x2E00], color: 'orange' };
    var o = { size: 2, blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00], color: 'yellow' };
    var s = { size: 3, blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620], color: 'green'  };
    var t = { size: 3, blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640], color: 'purple' };
    var z = { size: 3, blocks: [0x0C60, 0x4C80, 0xC600, 0x2640], color: 'red'    };
=======

//BLOCK DEFININTIONS
//TODO: Redo the colors
var i = { blocks: [0x0F00, 0x2222, 0x00F0, 0x4444], color: 'cyan'   };
var j = { blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20], color: 'blue'   };
var l = { blocks: [0x4460, 0x0E80, 0xC440, 0x2E00], color: 'orange' };
var o = { blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00], color: 'yellow' };
var s = { blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620], color: 'green'  };
var t = { blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640], color: 'purple' };
var z = { blocks: [0x0C60, 0x4C80, 0xC600, 0x2640], color: 'red'    };
>>>>>>> origin/master

function init() {
	//link 
	stage = new createjs.Stage("gameCanvas");
<<<<<<< HEAD
	stage.mouseEventsEnabled = true;
	
	showLoadingScreen(true);
	preload();
	
	//stage.addEventListener(stage);
}

function showLoadingScreen(bool) {
	console.log("showLoadingScreen("+bool+")");
	if(bool) {
		var rect = new createjs.Shape();
		rect.graphics.beginFill("#000").drawRect(0, 0, canvasw, canvash);
		
		var text = new createjs.Text('Loading...', 'bold 40px Arial', '#FFF');
		text.x = canvasw/2 - 50;
		text.y = canvash/2 - 20;
		
		loadingscreen.addChild(rect, text);		
		stage.addChild(loadingscreen);
	} else {
		stage.removeChild(loadingscreen);
	}
	stage.update();
}

//BEGIN PRELOADER
function preload() {
	
	//Files to load
	manifest = [
		{src:"images/backgrounds/1.png", 	id:"background1"},
		{src:"images/backgrounds/2.png", 	id:"background2"},
		{src:"images/backgrounds/3.png", 	id:"background3"},
		{src:"images/menubackground.png",	id:"menubackground"},
		{src:"images/title.png", 			id:"title"},
		{src:"images/playbutton.png", 		id:"playbutton"},
		{src:"images/normalbutton.png",		id:"normalbutton"},
		{src:"images/hardbutton.png",		id:"hardbutton"}
    ];	
	
	//Define preloader and set handler functions
    preloader = new createjs.LoadQueue(true);        
    preloader.on("fileload", handleFileLoad);
    preloader.on("progress", handleProgress);
    preloader.on("complete", handleComplete);
    //preloader.on("error", loadError);
	
	//load the above manifest
	preloader.loadManifest(manifest);
}

function handleProgress(event) {
	//use event.loaded to get the percentage of the loading
	//progress bar can go here
}

function handleFileLoad(event) {
	//triggered when an individual file completes loading
	console.log("Loaded Image: " + event.item.id);
	
	//Assign each loaded image to a variable when loaded
	switch(event.item.id) {
		case "background1":
			background1 = new createjs.Bitmap(event.result);
			break;
		case "background2":
			background2 = new createjs.Bitmap(event.result);	
			break;		
		case "background3":
			background3 = new createjs.Bitmap(event.result);	
			break;
		case "menubackground":
			menubackground = new createjs.Bitmap(event.result);		
			break;
		case "title":
			title = new createjs.Bitmap(event.result);	
			break;		
		case "playbutton":
			playbutton = new createjs.Bitmap(event.result);	
			break;
		case "normalbutton":
			normalbutton = new createjs.Bitmap(event.result);		
			break;
		case "hardbutton":
			hardbutton = new createjs.Bitmap(event.result);
			break;
	}
}

function handleComplete(event) {
	//triggered when all loading is complete
	console.log("handleComplete()");
	showLoadingScreen(false);
	addTitleView();
}
//END

//Create the main menu
function addTitleView() {
	console.log("Loading Main Menu...");
	title.x = (canvasw / 3) + 50;
	title.y = (canvash / 5);
	
	playbutton.x = (canvasw/2) - playbutton.image.width/2;
	playbutton.y = (canvash/2) + 50;
	
	//Hidden difficulty buttons
	normalbutton.x = playbutton.x;
	normalbutton.y = playbutton.y - 40;	
	normalbutton.visible = false;
	
	hardbutton.x = playbutton.x;
	hardbutton.y = playbutton.y + 40;
	hardbutton.visible = false;
	
	playbutton.addEventListener("click", function() { 
		playbutton.visible 		= false;
		normalbutton.visible 	= true;
		hardbutton.visible		= true;
		stage.update();
	});
	
	normalbutton.addEventListener("click", 	function() {difficulty = 1; addGameView(); } );
	hardbutton.addEventListener("click",	function() {difficulty = 2; addGameView(); } );
	
	titleview.addChild(menubackground,title,playbutton,normalbutton,hardbutton);
	stage.addChild(titleview);
	stage.update();
	
	//TODO
}

function tweenTitleView() {
	//createjs.Tween.get(stage).to({alpha: 0.4}, 1000).call( addGameView() );
}

//Create the ingame hud
function addGameView() {
	//kill the main menu
	console.log("addGameView()");
	console.log("difficulty = " + difficulty);
	stage.removeChild(titleview);
	
	//set the difficulty
	switch(difficulty) {
		case 1:
			break;
		case 2:
			break;
	}
	
	//select a random background
	bgselect = Math.random();
	if(bgselect <= 0.33) {
		console.log("Adding BG1");
		gameview.addChild(background1);
	} else if(bgselect >= 0.66) {
		console.log("Adding BG3");
		gameview.addChild(background3);
	} else {
		console.log("Adding BG2");
		gameview.addChild(background2);
	}
	
	//game ui
	//gameboard
	var gamefill = new createjs.Shape();
	gamefill.graphics.beginFill(fillcolor).drawRect(boardx,boardy,boardwidth,boardheight);
	gamefill.alpha = fillalpha;
	
	var gameborder = new createjs.Shape();
	gameborder.graphics.setStrokeStyle(borderwidth, "round", "round").beginStroke(bordercolor).drawRect(boardx,boardy,boardwidth,boardheight);

	//nextpiece
	var npfill = new createjs.Shape();
	npfill.graphics.beginFill(fillcolor).drawRect(nextpiecex,nextpiecey,nextpiecew, nextpieceh);
	npfill.alpha = fillalpha;
	
	var npborder = new createjs.Shape();
	npborder.graphics.setStrokeStyle(borderwidth, "round", "round").beginStroke(bordercolor).drawRect(nextpiecex,nextpiecey,nextpiecew, nextpieceh);
	
	var nptext = new createjs.Text("NEXT", textfont, textcolor);
	nptext.x = nextpiecex + 33;
	nptext.y = nextpiecey + 15;
	
	//scoreboard
	var sbfill = new createjs.Shape();
	sbfill.graphics.beginFill(fillcolor).drawRect(scorex,scorey,scorew, scoreh);
	sbfill.alpha = fillalpha;
	
	var sbborder = new createjs.Shape();
	sbborder.graphics.setStrokeStyle(borderwidth, "round", "round").beginStroke(bordercolor).drawRect(scorex,scorey,scorew, scoreh);
	
	var sbtext = new createjs.Text("SCORE", textfont, textcolor);
	sbtext.x =	scorex + 18;
	sbtext.y =  scorey + 15;
	
	score = new createjs.Text("0", textfont, textcolor);
	score.x = (scorex + scorew) / 2;
	score.y = (scorey + (scoreh/2))
	
	//debugging grid
	if(showgrid) {
		var grid = new createjs.Container();
		var line = new createjs.Shape();
		
		for(var count = 1; count<bbw; count++) {
			line.graphics.f("#555").dr(boardx, boardy + ((boardheight) / bbw) * count, boardwidth, 1);
			grid.addChild(line);
			line.graphics.f("#555").dr(boardx + (boardwidth / bbw) * count, boardy, 1, boardheight);
			grid.addChild(line);
		}
		gameview.addChild(grid);
	}
	
	//Add ui to gameview
	gameview.addChild(gamefill, gameborder, npfill, npborder, nptext, sbfill, sbborder, sbtext, score);
	
	stage.addChild(gameview);
	stage.update();
}

//Start the game and Ticker
function startGame(event) {
	console.log("Game Started.");
	createjs.Ticker.addEventListener("tick", update);
	createjs.Ticker.addEventListener("tick", movePaddle);
}

//Reset the game
function reset() {
	stage.update();
}

//Update the screen on every tick
//The bulk of the game is here
function update(event) {
	stage.update();
}

function endgame(event) {
	
	stage.update();
}

//------------------------------------------------
// do the bit manipulation and iterate through each
// occupied block (x,y) for a given piece
//------------------------------------------------
function eachblock(type, x, y, dir, fn) {
	var bit, result, row = 0, col = 0, blocks = type.blocks[dir];
	for(bit = 0x8000 ; bit > 0 ; bit = bit >> 1) {
		if (blocks & bit) {
			fn(x + col, y + row);
		}
		if (++col === 4) {
		col = 0;
		++row;
=======
	
	preload();
	
}

function eachblock(type, x, y, dir, fn) {
	var bit, result, row = 0, col = 0, blocks = type.blocks[dir];
	for(bit = 0x8000; bit > 0; bit = bit >> 1) {
		//If the block fills the space, TODO
		if(blocks & bit) {
			fn(x + col, y + row);
		}
		
		//If the rotated piece leaves its bounds, have it go to the next row
		if(++col === 4) {
			col = 0;	
			++row;
>>>>>>> origin/master
		}
	}
}

<<<<<<< HEAD
function occupied(type, x, y, dir) {
    var result = false
    eachblock(type, x, y, dir, function(x, y) {
		if ((x < 0) || (x >= nx) || (y < 0) || (y >= ny) || getBlock(x,y))
          result = true;
    });
    return result;
}


function drawPiece() {
	
}

function drawBlock() {
=======
//Returns true if any of the blocks required to place a position on
//the grid would be occupied
function occupied(type, x, y, dir) {
	var ret = false;
>>>>>>> origin/master
	
}