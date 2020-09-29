var plinkos=[];
var particles=[];
var divisions=[];
var ground;





function setup() {
  createCanvas(400,800);
  plinko=new Plinko(200,300,40,40);
  particle=new Particle(400,500,20,20);
  division=new Divisions(500,300,10,50);
  ground=new Ground(150,250,400,20);
}

function draw() {
  background(255,255,255);
  
  for(var j=40; j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=0; j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length;k++){
   divisions[k].display();
  }
  drawSprites();
  plinko.display();
  particle.display();
  division.display();
  ground.display();
}