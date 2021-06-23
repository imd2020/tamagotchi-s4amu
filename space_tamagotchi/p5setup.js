function setup() {
  let myCanvas = createCanvas(width, height);
  myCanvas.parent("tamagotchi");
  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(width, height);
  clear();
});

window.addEventListener("keydown", function (event) {
  if ([38, 40, 32, 37, 39].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
});

new p5();
let width = windowWidth;
let height = windowHeight;
// if (width > height) {
//   width = height;
// } else if (height > width) {
//   height = width;
// }
