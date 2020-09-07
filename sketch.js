var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var playerFlag = 1;
var flag = 0;
var flag1;
var database;
var form, player, game;
var player1,player2,head,player3,player4;
var player1_img,player2_img,player3_img,player4_img;
function preload()
{
  player1_img = loadImage("images/runner1.png");
  player2_img = loadImage("images/runner2.png");
  player3_img = loadImage("images/runner3.png");
  player4_img = loadImage("images/runner4.png");
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