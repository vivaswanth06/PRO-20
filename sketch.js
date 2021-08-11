var cat;
var mouse;
var bg;
var catImg,cat2Img,cat3Img;
var mouseImg,mouse2Img,mouse3Img;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png")
    cat2Img = loadImage("images/cat2.png","images/cat3.png")
    cat3Img = loadImage("images/cat4.png")
     mouseImg = loadImage("images/mouse1.png")
     mouse2Img = loadImage("images/mouse2.png","images/mouse3.png")
     mouse3Img = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600,10,10)
    cat.addAnimation("tomSleeping",catImg);
    cat.scale = 0.2;

    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("jerryStabding",mouseImg);
    mouse.scale = 0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", cat3Img);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouse3Img);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
    }  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("tomRunning", cat2Img);
    cat.changeAnimation("tomRunning");
    
    mouse.addAnimation("jerryTeasing", mouse2Img);
    mouse.frameDelay = 25;
    mouse.changeAnimation("jerryTeasing");
}
}



