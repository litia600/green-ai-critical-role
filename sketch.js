let x;
let y;

let xspeed;
let yspeed;

let bounce;

let r, g, b;

function preload() {
  bounce = loadImage('dark.png');
}

function setup() {
  // Use the actual size of the iframe container
  const container = document.documentElement;
  const w = container.clientWidth;
  const h = container.clientHeight;

  createCanvas(w, h);
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
  // No background() = persistent trails
  tint(r, g, b);
  image(bounce, x, y);

  x += xspeed;
  y += yspeed;

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

function windowResized() {
  const container = document.documentElement;
  const w = container.clientWidth;
  const h = container.clientHeight;
  resizeCanvas(w, h);
}
