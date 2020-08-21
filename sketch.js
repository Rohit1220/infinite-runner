var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var player1,player2,head;
var player1_img,player2_img;
function preload()
{
 // track = loadImage("images/track.jpg")
  player1_img = loadImage("images/player1.jpg");
  player2_img = loadImage("images/player2.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}