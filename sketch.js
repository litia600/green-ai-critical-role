let x;
let y;

let xspeed;
let yspeed;

let bounce;

let r, g, b;

function preload() {
  bounce = loadImage('dark.png'); // make sure dark.png is in your project folder
}

function setup() {
  // Create a canvas that fits the iframe window size
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.body); // attaches canvas to body so it fills the whole page

  x = random(width);
  y = random(height);
  xspeed = 3;
  yspeed = 3;
  pickColor();
}

function windowResized() {
  // Resize canvas when the iframe's viewport resizes (e.g. device rotates)
  resizeCanvas(windowWidth, windowHeight);
}

function pickColor() {
  r = random(200, 256);
  g = random(200, 256);
  b = random(200, 256);
}

function draw() {
  // Optional: remove background() to get trail effect
  // background(0);

  tint(r, g, b);
  image(bounce, x, y);

  x += xspeed;
  y += yspeed;

  // Bounce off the sides
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
