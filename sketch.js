const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
        }


    Engine.update(engine);

    // write code to display time in correct format here


}
async function getBackgroundImg(){
    var timeofindia = await fetch("https://worldtimeapi.org/api/timezone/Asia/KOLKATA");
    var converter = await timeofindia.json();
    console.log (converter);
    var datetime = converter.datetime;
    console.log(datetime);
    var hour = (datetime.slice(11,13));
    console.log(hour);

    if(hour>=05 && hour<=06){
        bg = "sunrise1.png";
    }

    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png"
    }
    
    else if(hour>=08 && hour<=09){
        bg = "sunrise3.png"
    }
    
    else if(hour>=09 && hour<=12){
        bg = "sunrise4.png"
    }
    
    else if(hour>=12 && hour<=17){
        bg = "sunrise5.png"
    }
    
    else if(hour>=17 && hour<=18){
        bg = "sunrise6.png"
    }
    
    else if(hour>=18 && hour<=19){
        bg = "sunset7.png"
    }
    
    else if(hour>=19 && hour<=20){
        bg = "sunset8.png"
    }
    
    else if(hour>=20 && hour<=21){
        bg = "sunset9.png"
    }
    
    else if(hour>=21 && hour<=22){
        bg = "sunset10.png"
    }
    
    else if(hour>=22 && hour==00){
        bg = "sunset11.png"
    }
    
    else {
        bg = "sunset12.png"
    }
    backgroundImg = loadImage(bg);
}
