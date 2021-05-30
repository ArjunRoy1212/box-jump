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

box.shapeColor=rgb(250,250,250)
}


function draw() {
    background(rgb(169,129,69));
    //create edgeSprite

if(isTouching(box , blue) && box.bounceOff(blue)) 
{
    box.shapeColor="blue"
}

if(isTouching(box,red) && box.bounceOff(red)){
    box.shapeColor="red"
}
if(isTouching(box,green) && box.bounceOff(green)){
    box.shapeColor=rgb(0,190,0)
}
if(isTouching(box,orange) && box.bounceOff(orange)){
    box.shapeColor=rgb(255,69,0)
}

if(keyDown("SPACE")){
box.velocityX=5
box.velocityY=4
}

Edges=createEdgeSprites()
    box.bounceOff(Edges)
    //add condition to check if box touching surface and make it box
    drawSprites()
}
function isTouching(object1, object2){
  
    if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2 &&
      object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2
       ){
       
        return true
     }
     else{
       
      return false
     }
  }