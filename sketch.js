let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload() {
  bounce = loadImage('dark.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 3;
  yspeed = 3;
  pickColor();
}

function pickColor() {
  r = random(200, 256);
  g = random(200, 256);
  b = random(200, 256);
}

function draw() {
  //background(0);
  // rect(x, y, 80, 60);
  tint(r, g, b);
  image(bounce, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + bounce.width >= width) {
    xspeed = -xspeed;
    x = width - bounce.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + bounce.height >= height) {
    yspeed = -yspeed;
    y = height - bounce.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}



