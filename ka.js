var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();
function setup() {
  createCanvas(w,h);
}
function draw() {
  background("black");
  jumper.show();
  jumper.update();
}
function jumper() {
  this.x = 50;
  this.y = 0;
  this.gravity = 0.5; //force of gravity
  this.lift = -10; //opposing force
  this.velocity = 0; // speed of gravity
  this.show = function() {
    fill(color("red"));
    ellipse(this.x,this.y,100,100);
  }
  this.up = function() {
    this.velocity += this.lift;
  }
  this.Lside = function() {
    this.x -= 15.5;
  }
  this.Rside = function() {
    this.x += 15.5;
  }
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9;
    if (this.y > h) { //stop on floor
      this.y = h;
      this.velocity = -10;
    }
    if (this.y < 0) { //stop on celling
      this.y = 0;
      this.velocity = 0;
    }
  }
  }
function keyPressed() {
  if (keyIsDown(32)) {
    jumper.up();
  }
  if ((keyIsDown(68)) /*&& (jumper.X < w)*/) {
    jumper.Rside();
  }
    if ((keyIsDown(65)) /*&& (jumper.X > 0)*/) {
    jumper.Lside();
  }
}