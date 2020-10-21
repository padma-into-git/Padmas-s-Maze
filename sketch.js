var Padma, cardboard1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7, cardboard8, cardboard9, cardboard10, cardboard11, cardboard12, cardboard13, cardboard14, cardboard15, cardboard16, cardboard17, cardboard18, cardboard19, cardboard20, cardboard21, cardboard22, target, imgPlayer, imgTrophy;

function preload(){
  imgTrophy = loadImage('images/Trophy.jpg',0,10);
  imgPlayer = loadImage('images/Padma.jpg',0,10);
}
function setup(){
  //creating the game object
  Padma = createSprite(20,25,18,18);  
  Padma.addAnimation('explode', imgPlayer);
  
  //creating the maze
  cardboard1 = createSprite(10,70,100,20);
  cardboard1.shapeColor = "yellow";
  cardboard2 = createSprite(100,50,20,100);
  cardboard2.shapeColor = "red";
  cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
  cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "orange";
  cardboard5 = createSprite(130,210,100,20);
  cardboard5.shapeColor = "blue";
  cardboard6 = createSprite(10,250,100,20);
  cardboard6.shapeColor = "violet";
  cardboard7 = createSprite(160,120,20,100);
  cardboard7.shapeColor = "green";
  cardboard8 = createSprite(150,20,100,20);
  cardboard8.shapeColor = "black";
  cardboard9 = createSprite(250,70,20,100);
  cardboard9.shapeColor = "white";
  cardboard10 = createSprite(270,150,100,20);
  cardboard10.shapeColor = "red";
  cardboard11 = createSprite(330,50,100,20);
  cardboard11.shapeColor = "yellow";
  cardboard12 = createSprite(340,125,20,100);
  cardboard12.shapeColor = "orange";
  cardboard13 = createSprite(220,250,20,100);
  cardboard13.shapeColor = "brown";
  cardboard14 = createSprite(330,210,150,20);
  cardboard14.shapeColor = "violet";
  cardboard15 = createSprite(100,300,20,100);
  cardboard15.shapeColor = "purple";
  cardboard16 = createSprite(180,310,100,20);
  cardboard16.shapeColor = "white";
  cardboard17 = createSprite(30,352,20,100);
  cardboard17.shapeColor = "black";
  cardboard18 = createSprite(175,352,20,100);
  cardboard18.shapeColor = "blue";
  cardboard19 = createSprite(280,290,20,100);
  cardboard19.shapeColor = "green";
  cardboard20 = createSprite(350,270,120,20);
  cardboard20.shapeColor = "brown";
  cardboard21 = createSprite(250,390,100,20);
  cardboard21.shapeColor = "indigo";
  cardboard22 = createSprite(330,370,20,100);
  cardboard22.shapeColor = "red";
  target = createSprite(395,375,10,50);
  target.addAnimation('explode', imgTrophy);
}
  
function draw() {
  //setting the background color to white 
  background("pink");

  Padma.velocityX=0;
  Padma.velocityY=0;
  if (Padma.bounce(target))  
  {
    textSize(40);
    stroke("red");
    text("You Win", 200,200);
  }
  stroke(rgb(128, 128, 128));

  if (keyDown("UP_ARROW")) {
    Padma.velocityX=0;
    Padma.velocityY=-4;
  }
  if (keyDown(DOWN_ARROW)) {
    Padma.velocityX=0;
    Padma.velocityY=4;
  }
  if (keyDown(LEFT_ARROW)) { 
    Padma.velocityX=-4;
    Padma.velocityY=0;
  }
  if (keyDown(RIGHT_ARROW)) { 
    Padma.velocityX=4;
    Padma.velocityY=0;
  }

  Padma.bounceOff(cardboard1);
  Padma.bounceOff(cardboard2);
  Padma.bounceOff(cardboard3);
  Padma.bounceOff(cardboard4);
  Padma.bounceOff(cardboard5);
  Padma.bounceOff(cardboard6);
  Padma.bounceOff(cardboard7);
  Padma.bounceOff(cardboard8);
  Padma.bounceOff(cardboard9);
  Padma.bounceOff(cardboard10);
  Padma.bounceOff(cardboard11);
  Padma.bounceOff(cardboard12);
  Padma.bounceOff(cardboard13);
  Padma.bounceOff(cardboard14);
  Padma.bounceOff(cardboard15);
  Padma.bounceOff(cardboard16);
  Padma.bounceOff(cardboard17);
  Padma.bounceOff(cardboard18);
  Padma.bounceOff(cardboard19);
  Padma.bounceOff(cardboard20);
  Padma.bounceOff(cardboard21);
  Padma.bounceOff(cardboard22);

  Padma.collide(target);

  createEdgeSprites();
  //Padma.bounceOff(edges);
  
  if(Padma.y < 0 || Padma.y > 400){
    Padma.velocityY = Padma.velocityY*-1;
  }
  if(Padma.x < 0 || Padma.x > 400){
    Padma.velocityX = Padma.velocityX*-1;
  }

  textSize(19);
  textFont("Helvetica");
  text("Trophy", 360, 340);
  textSize(19);
  text("Padma",30,43);

  drawSprites();


}
