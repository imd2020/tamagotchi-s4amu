let rectangle = {
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

window.draw = draw;

animateStep1();

function draw() {
  clear();
  fill(0, 0, 0);
  rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}

function animateStep1() {
  gsap.to(rectangle, {
    x: 300,
    duration: 2,
    ease: "easeOut",
    onComplete: function () {
      animateStep2();
    },
  });
}
function animateStep2() {
  gsap.to(rectangle, {
    y: 300,
    duration: 2,
    ease: "easeOut",
    onComplete: function () {
      animateStep3();
    },
  });
}

function animateStep3() {
  gsap.to(rectangle, {
    x: 100,
    duration: 2,
    ease: "easeOut",
    onComplete: function () {
      animateStep4();
    },
  });
}

function animateStep4() {
  gsap.to(rectangle, {
    y: 100,
    duration: 2,
    ease: "easeOut",
    onComplete: function () {
      animateStep1();
    },
  });
}
