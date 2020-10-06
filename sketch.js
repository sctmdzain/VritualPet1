//Create variables here
var dog,happyDog,Dog,database,foodS,foodStock
function preload()
{
 
  //load images here
  Dog=loadImage("images/dogImg.png")
 happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
   dog=createSprite(200,200,10,5)
   dog.addImage(Dog);
   dog.scale=0.3
 
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);

}
  drawSprites();
  //add styles here
text ("print foodStock",50,50)
textSize (8)
fill ("red")
stroke ("blue")
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}