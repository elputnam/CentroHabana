let EL1;
let EL2;
let dad;
let layer1;
let base;
let tileCount = 10;
let colour = 0;

function preload(){
  EL1 = loadImage('assets/CentroHabana_EL1.png');
  EL2 = loadImage('assets/CentroHabana_EL2.png');
  dad = loadImage('assets/CentroHabana_Dad.png')
  layer1 = loadImage('assets/ELDad_CentroHabana_layer1.png')
  base = loadImage('assets/ELDad_CentroHabana_base.png')
}

function setup() {
  createCanvas(base.width/2, base.height/2);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(8);
}

function draw() {
  background(base);
  if (frameCount%10==0){
  tileCount = random(20);
  }
  //layer 1
  //if (frameCount%2==0){
  push()
  tint(255, random(20));
  image(layer1, 0, 0, layer1.width/2, layer1.height/2);
  blend(layer1, 0, 0, layer1.width, layer1.height, 0, 0, layer1.width/2, layer1.height/2, DARKEST);
  pop();
  //}

  //Dad
  push();
  tint(255, random(50, 100));
  dad.filter(GRAY);
  image(dad, 0, 0, dad.width/2, dad.height/2);
  pop();

  
 

  //EL1
  push();

  //tint(255, random(80, 100));
  image(EL1, 0, 0, EL1.width*.5, EL1.height*.5);
  EL1.filter(GRAY);
  pop();

 
  
//color block
  noStroke();
  for (i = 0; i < 5; i++){
    fill(colour, random(100), random(100), random(20, 30));
  if (frameCount%7==0){
  
  colour = random(360);
  }
    rect(random(width*.55,width*.8), 0, random(width*.55), height);
}
  //rect(0, 0, width, height);

 //if (frameCount%10==0){
  // push();
  // translate(width*.57, 0)
  // grid();
  // pop();
  //}
   //EL2
   push();
   tint(colour, random(100), random(100), 50);
   
   image(EL2, 0, 10, EL2.width/2, EL2.height/2);
   blend(EL2, 0, 0, EL2.width, EL2.height, 0, 0, EL2.width/2, EL2.height/2, LIGHTEST);
   pop();
  
  //  }


 
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      noStroke();
      rectMode(CORNER);
      //fill(0);
      //rect(posX, posY, width/tileCount, height/tileCount);
      
    
      var toggle = floor(random(2));
    
      if (toggle == 1){
         fill(0, random(100));
          rect(posX, posY, width/tileCount, height/tileCount);
    } else {
      fill(255, random(100)) ;
      rect(posX, posY, width/tileCount, height/tileCount);
      }
      }
    }
}
