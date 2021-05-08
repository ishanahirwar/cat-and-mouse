var bg;
var cat,catImage1,catImage2,catImage3;
var rat,ratImage1,ratImage2,ratImage3;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");

    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage3=loadAnimation("images/cat4.png");

    ratImage1=loadAnimation("images/mouse1.png");
    ratImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    ratImage3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("sleepingCat",catImage1);
    cat.scale=0.2;

    rat=createSprite(200,600);
    rat.addAnimation("standingRat",ratImage1);
    rat.scale=0.2;

    cat.debug=true;
    rat.debug=true;
    
    

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-rat.x<(rat.width-cat.width)/2){
    cat.velocityX=0;
    cat.x=300;
    cat.addAnimation("finalCat",catImage3);
   cat.changeAnimation("finalCat");

   rat.addAnimation("finalRat",ratImage3);
   rat.changeAnimation("finalRat");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
   cat.velocityX=-5;
   cat.addAnimation("runningCat",catImage2);
   cat.changeAnimation("runningCat");

   rat.addAnimation("teasingRat",ratImage2);
   rat.frameDelay=25;
   rat.changeAnimation("teasingRat");
  }


}
