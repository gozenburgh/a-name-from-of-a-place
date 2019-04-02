var w = window.innerWidth;
var h = window.innerHeight;
var plate = new plate();
function setup() {
  createCanvas(w,h);
}

function draw() {
  background("black");
  plate.show();
  //plate.update();
}
function plate() {
  //this.leftPull = .1;
  //this.velocity = 5;
  this.wi = 150;
  this.he = 50;
  this.x = 150;
  this.y = 150;
  //this.x = w + this.wi;
  //this.y = Math.floor((Math.random() * h) + 10);
  this.show = function() {
    this.x;
    this.y;
    fill(color("green"));
    rect(this.x,this.y,this.wi,this.he);
  }
  /*this.update = function() {
    this.velocity += this.leftPull;
    this.x -= this.velocity;
  }*/
  }