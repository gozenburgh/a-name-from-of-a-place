var w = window.innerWidth;
var h = window.innerHeight;
var barri = new barri();
function setup() {
  createCanvas(w,h);
}
function draw() {
  background("black");
  barri.show();
  barri.update();
}
function barri() {
  this.leftPull = .5;
  this.velocity = 5;
  this.wi = 100;
  this.he = 100;
  this.x = w + this.wi;
  this.y = Math.floor((Math.random() * h) + 10);
  this.show = function() {
    this.x;
    this.y;
    fill(color("white"));
    rect(this.x,this.y,this.wi,this.he);
  }
  this.update = function() {
    this.velocity += this.leftPull;
    this.x -= this.velocity;
  }
  }