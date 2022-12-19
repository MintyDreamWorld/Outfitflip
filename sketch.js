var currentSeasons = 1;
let Seasons = [];

function preload(){
  Seasons[0] = loadImage('media/Zero01.png');
  Seasons[1] = loadImage('media/Zero02.png');
  Seasons[2] = loadImage('media/Zero03.png');
  Seasons[3] = loadImage('media/Zero04.png');
}

function setup(){
  createCanvas(1000,1000);
}

function draw(){
  background("#B03ADC");
  fill("#ffffff")
  stroke("#7803B2")
  strokeWeight("8");
  textSize(100);
  textFont("Helvetica");
  textStyle(BOLDITALIC);
  text("Click",mouseX ,mouseY, 575,100);
  image(Seasons[currentSeasons],0,0,1000,1000);
}

function mousePressed(){
  if(currentSeasons >= 3){
    currentSeasons = 0
  }else{
    currentSeasons = currentSeasons + 1;
  }
}
