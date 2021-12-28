var avocado,bananas,beetroot,basket;
var avocadoImg,bananasImg,beetrootImg;
var avocadoG,bananasG,beetrootG;
var factory, compost, resturant; 


var PLAY=1;
var END=0;
var gameState=1;

function preload(){

}
function setup() {
  createCanvas(1000,1000);

basket = createSprite(450,800,50,50); 
basket.setCollider("rectangle",0,0,50,50);

resturant = createSprite(450,800,100,100); 

factory = createSprite(70,415,50,50); 

basket.debug= true;
avocadoG=new Group();
bananasG=new Group();
beetrootG=new Group();


}

function draw() {

  if(gameState===PLAY){
  background("blue");
  basket.x = World.mouseX;
  basket.y = World.mouseY;
  
  edges= createEdgeSprites();
 // basket.collide(edges);

    createAvocado();
    createBeetroot();
    createBananas();


    if (avocadoG.isTouching(basket)) {
      avocadoG.destroyEach();

    }
    else if (bananasG.isTouching(basket)) {
      bananasG.destroyEach();

      
    }else if(beetrootG.isTouching(basket)) {
      beetrootG.destroyEach();
         
    }
        
//console.log(World.mouseY);
//console.log(World.mouseX);

        //basket.scale=1;
        //basket.x=windowWidth/2;
        //basket.y=windowHeight/2;
        
        avocadoG.destroyEach();
        avocadoG.setVelocityYEach(0);
        beetrootG.destroyEach();
        beetrootG.setVelocityYEach(0);
        bananasG.destroyEach();
        bananasG.setVelocityYEach(0);
        
        drawSprites();
        
    }
  }
  



function createAvocado() {
  if (keyDown("a")) {
  var avocado = createSprite(70,415, 50, 50);
  //avocado.addImage(avocadoImg);
  avocado.scale=0.25;
  avocado.velocityX = 3;
  //avocado.lifetime = 150;
  avocadoG.add(avocado);
  console.log("I work you little"); 
  }
}

function createBeetroot() {
  if (World.frameCount % 320 == 0) {
  var bananas = createSprite(Math.round(random(50,width-50),40, 10, 10));
  //bananas.addImage(bananasImg);
  bananas.scale=0.1;
  bananas.velocityY = 3;
  bananas.lifetime = 150;
  bananasG.add(bananas);
}
}

function createBananas() {
  if (World.frameCount % 410 == 0) {
  var beetroot = createSprite(Math.round(random(50, width-50),40, 10, 10));
  //beetroot.addImage(beetrootImg);
  beetroot.scale=0.25;
  beetroot.velocityY = 3;
  beetroot.lifetime = 150;
  beetrootG.add(beetroot);
  }
}

