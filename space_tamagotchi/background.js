import { Star } from "./star.js";

export default class Background {
  constructor() {
    this.stars = [];
    this.counter = 0;
    this.freighterPos = {
      x: -200,
      y: height / 2,
    };
    this.sizeFactor = 0;
  }
  freighter(assets) {
    this.counter += 1 / 30;
    if (this.counter >= random(50, 120)) {
      this.enableFreighter = true;
      this.freighterPos.y += random(-300, 300);
      this.sizeFactor = random(1, 2);
      this.counter = 0;
    }
    if (this.enableFreighter === true) {
      this.freighterPos.x += random(1, 3);

      image(
        assets.visuals.freighter,
        this.freighterPos.x,
        this.freighterPos.y,
        130 * this.sizeFactor,
        100 * this.sizeFactor
      );
    }
    if (this.freighterPos.x >= width + 200) {
      this.enableFreighter = 0;
      this.freighterPos.x = -200;
    }
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
