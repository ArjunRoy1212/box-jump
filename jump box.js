var canvas;
var music;
var blue, red,green, orange, Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
blue=createSprite(109,540,229,39) 
red=createSprite(309,540,229,39)
green=createSprite(509,540,229,39)
orange=createSprite(709,540,229,39)
blue.shapeColor=rgb(0,0,200)
red.shapeColor=rgb(350,0,0)
green.shapeColor=rgb(0,190,0)
orange.shapeColor=rgb(255,69,0)
    //create box sprite and give velocity
    box=createSprite(random(20,750),80,80)
box.velocityX=3
box.shapeColor=rgb(250,250,250)
}


function draw() {
    background(rgb(169,129,69));
    //create edgeSprite

if(keyDown(SPACE)){
box.velocityY=2
}

Edges=createEdgeSprites()
    box.bounceOff(Edges)
    //add condition to check if box touching surface and make it box
    drawSprites()
}
