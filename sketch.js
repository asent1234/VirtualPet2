//var database ;
const db = firebase.database();
var dog, happyDog, foodS, foodStock;
var stockbutton
var dogimg, happydogimg;
var food
var hour
var period = ""
function preload(){
    dogimg = loadImage("images/Dog.png");
    happydogimg = loadImage("images/happydog.png");
}
function setup(){
    food = new Food;
    food.getFS
    canvas = createCanvas(800, 800);
    dog = createSprite (575, 250,1,1);
    dog.scale = 0.15;
    dog.addImage(dogimg, "dogimg");

    stockbutton = createButton("Add Stock");
    stockbutton.mousePressed(stock);
    stockbutton.position(100,100)
    
    feadbutton = createButton("Feed");
    feadbutton.mousePressed(feed);
    feadbutton.position(200,100)
}
function draw(){
    background(46, 139, 87);
    drawSprites();
    food.getFS();
    food.getLF();

    getFeedTime();
   /// foodStock = db.ref('Food');
   /// foodStock.on('value', readStock);
    stroke("white");
    text("Food Remaing: "+ food.foodStock, 50, 100);
    
    text("Last Fed: "+ food.lastFed, 50, 80 )
    //text("Remember the Up arrow, will feed the dog.",50, 150);
    food.display();
  // if(frameCount % 10 === 0){
     //  stock();
  // }
}

//function readStock(data){
//    foodS = data.val();
//    //console.log("hello");
//}
function stock(){
    food.updateFS();
    
    console.log("It be working")
}
function feed(){
    food.deductF();
    food.updateLF()
    if(hour > 12){
        period = "PM"
    }
    if(hour < 12){
        period = "AM"
    }
    console.log("It be working")

}

//function writeStock(food){
//
//    firebase.database().ref("/").update({
//        Food: food
//    })
//}
async function getFeedTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    
    console.log(hour)
}