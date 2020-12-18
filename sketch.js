var bullet,wall;
var speed,thickness,damage;

function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,50,25);
  bullet.shapeColor="white";

  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;
}

function draw() {
  background("lightblue");  
 // console.log("hi");
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*speed*speed*weight/(thickness*thickness*thickness);
   // console.log(damage);
    if(damage>10){
      wall.shapeColor="red";
      textSize(20);
      fill("black");

      text("Speed: "+Math.round(speed)+"    Weight: "+Math.round(weight),700,100);
      textSize(50);
      fill("red");
      stroke("black");
      text("Wall not Effective :(",650,200);

    }
    else{
      textSize(20);
      fill("black");

      text("Speed: "+Math.round(speed)+"    Weight: "+Math.round(weight),730,100);
      textSize(50);
      fill("green");
      stroke("pink");
      text("Wall Effective!!!!!!!",700,200);

      wall.shapeColor="green";
    }
  }


 
  drawSprites();
}

function hasCollided(oLeft,oRight){
  var rEdge,lEdge;
  rEdge=Math.round(oLeft.x+(oLeft.width/2));
  lEdge=Math.round(oRight.x-(oRight.width/2));
 // console.log(rEdge+" "+lEdge);
  if(rEdge>lEdge){
   // console.log("1");
    return true;
  }
  else{
   // console.log("2");
    return false;
  }
}