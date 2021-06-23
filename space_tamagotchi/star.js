export class Star {
  constructor() {
    this.size = random(0.1, 1);
    this.changer = 1;
    this.growthChange = round(random(30, 10));
    this.position = {
      x: random(0, width),
      y: random(0, height),
    };
  }

  movement() {
    this.changer += 1;
    if (this.changer > this.growthChange) {
      this.changer = -this.growthChange;
    }
    if (this.changer > 0) {
      this.size += 0.08;
    }
    if (this.changer < 0) {
      this.size -= 0.08;
    }
  }

  display() {
    push();
    strokeWeight(1);
    fill(255, 255, 255);
    this.movement();
    ellipse(this.position.x, this.position.y, this.size);
    pop();
  }
}
