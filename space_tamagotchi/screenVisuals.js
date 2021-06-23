import { Star } from "./star.js";

export default class Background {
  constructor() {
    this.stars = [];
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
