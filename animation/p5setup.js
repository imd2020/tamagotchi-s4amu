function setup() {
  let myCanvas = createCanvas(width, height);
  myCanvas.parent("animation");
  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(width, height);
  clear();
});

new p5();
let width = windowWidth;
let height = windowHeight;
// if (width > height) {
//   width = height;
// } else if (height > width) {
//   height = width;
// }
