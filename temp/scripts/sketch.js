let logimgs = []; // let clickedsound;
// let powersound;

let images2;
let star = false;
let images = [];
var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  // images2 = loadImage("img/name1.png");
  for (let i = 0; i < 3; i++) {
    images[i] = loadImage(`img/name${i}.png`);
  } // clickedsound = loadSound("audio/clicked.mp3");
  // powersound = loadSound("audio/powerup.wav");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1"); // background(255, 255, 255);

  for (let i = 0; i < 8; i++) {
    let x = random(windowWidth);
    let r = random(50, 150);
    let y = i * r * 4; // let kitten = random(images);

    let b = new logimg(x, y, r);
    logimgs.push(b);
  } // avatar = new Dj();
  // clickedsound.setVolume(0.1);
  // powersound.setVolume(0.2);

} // function mousePressed() {
//   for (let i = 0; i < logimgs.length; i++) {
//     logimgs[i].clicked(mouseX, mouseY);
//     avatar.clicked(mouseX, mouseY);
//   }
// }


function draw() {
  clear(); // background(255, 255, 255);
  // avatar.fly();
  // avatar.show();

  for (let i = 0; i < logimgs.length; i++) {
    if (star === true) {
      logimgs[i].moveup();
      star = false;
    } else {
      logimgs[i].movedown();
      star = true;
    }

    logimgs[i].show();
  }
}

class logimg {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.kitten = random(images);
  } //
  // clicked(px, py) {
  //   //let d = dist(px, py, this.x, this.y);
  //   //if (d < this.r) {
  //   if (
  //     px > this.x &&
  //     px < this.x + this.r &&
  //     py > this.y &&
  //     py < this.y + this.r
  //   ) {
  //     this.kitten = images2;
  //     clickedsound.play();
  //
  //     // random(images);
  //   }
  // }


  movedown() {
    // this.x = this.x + random(-1, 1);
    this.y = this.y - 2;
  }

  moveup() {
    // this.x = this.x + random(-1, 1);
    this.y = this.y + 2;
  }

  show() {
    image(this.kitten, this.x, this.y, this.r, this.r * 7); // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }

} // class Dj {
//   constructor() {
//     this.x = 200;
//     this.y = 700;
//     this.r = 50;
//     this.dj = loadImage("img/dj.png");
//   }
//   clicked(px, py) {
//     //let d = dist(px, py, this.x, this.y);
//     //if (d < this.r) {
//     if (
//       px > this.x &&
//       px < this.x + this.r &&
//       py > this.y &&
//       py < this.y + this.r
//     ) {
//       powersound.play();
//
//       // random(images);
//     }
//   }
//   fly() {
//     this.x = this.x - 2;
//     this.y = this.y - 2;
//   }
//
//   show() {
//     image(this.dj, this.x, this.y, this.r, 100);
//     // stroke(255);
//     // strokeWeight(4);
//     // fill(this.brightness, 125);
//     // ellipse(this.x, this.y, this.r * 2);
//   }
// }