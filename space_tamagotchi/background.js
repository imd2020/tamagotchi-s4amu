import { Star } from "./star.js";

export default class Background {
  constructor() {
    this.stars = [];
    this.counter = 0;
    this.freighterPos = {
      x: -200,
      y: height / 2,
    };
    this.sizeFactor = 1;
    this.planetPos = {
      x: random(200, width - 200),
      y: random(200, height - 200),
    };
    this.titlePos = {
      x: width / 2 + 40,
      y: -200,
    };
  }

  animation() {
    const ship = this;
    this.sizeFactor = random(0.8, 1.7);
    this.freighterPos.x = -200;
    this.freighterPos.y = height / 2 + random(-200, 200);
    gsap.to(this.freighterPos, {
      x: width + 200,
      y: height / 2 + random(-200, 200),
      duration: random(20, 30),
      ease: "linear",
      delay: random(30, 60),
      onComplete: () => {
        ship.animation();
      },
    });
  }

  freighter(assets) {
    push();
    imageMode(CENTER);
    image(assets.visuals.planet, this.planetPos.x, this.planetPos.y, 200, 150);

    image(
      assets.visuals.freighter,
      this.freighterPos.x,
      this.freighterPos.y,
      130 * this.sizeFactor,
      100 * this.sizeFactor
    );
    pop();
  }

  titleAnimation() {
    gsap.to(this.titlePos, {
      y: height / 2 - 200,
      duration: 5,
      ease: "elastic",
    });
  }

  title(assets) {
    push();
    imageMode(CENTER);
    image(assets.visuals.title, this.titlePos.x, this.titlePos.y, 1000, 700);
    pop();
  }

  displayBackground() {
    background(20, 20, 20);
    while (this.stars.length < 2000) {
      let star = new Star();
      this.stars.push(star);
    }
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].display();
    }
  }
}
