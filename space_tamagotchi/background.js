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
  }

  animation() {
    const ship = this;
    this.x = 0;
    gsap.to(this.freighterPos, {
      x: width + 200,
      y: height / 2 + random(-200, 200),
      duration: random(10, 20),
      ease: "linear",
      // repeat: -1,
      // repeatDelay: 5,
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
    // this.counter += 1 / 30;
    // if (this.counter >= random(60, 120)) {
    //   this.enableFreighter = true;
    //   this.freighterPos.y += random(-300, 300);
    //   this.sizeFactor = random(1, 2);
    //   this.counter = 0;
    // }
    // if (this.enableFreighter === true) {
    //   image(
    //     assets.visuals.freighter,
    //     this.freighterPos.x,
    //     this.freighterPos.y,
    //     130 * this.sizeFactor,
    //     100 * this.sizeFactor
    //   );
    // }
    // if (this.freighterPos.x >= width + 200) {
    //   this.enableFreighter = 0;
    //   this.freighterPos.x = -200;
    // }
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
