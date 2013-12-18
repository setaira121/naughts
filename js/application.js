var canvas = document.getElementById("game_canvas");
var context = canvas.getContext("2d");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
context.fillStyle = "rgba(255,0,0,1)"
context.fillRect(0,0,canvasWidth,canvasHeight);

context.fillStyle = "rgba(0,255,0,0.5)"
context.fillRect(0,0,canvasWidth/2,canvasHeight/2);