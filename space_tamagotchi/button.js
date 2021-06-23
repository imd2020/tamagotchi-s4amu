export default class Button {
  constructor(
    displayedR,
    displayedG,
    displayedB,
    r,
    g,
    b,
    a,
    x,
    y,
    sizeX,
    sizeY,
    roundness,
    text
  ) {
    this.interactionColor = [r, g, b, a];
    this.displayedColor = [displayedR, displayedG, displayedB];
    this.pos = {
      x: x,
      y: y,
    };
    this.shape = {
      x: sizeX,
      y: sizeY,
      roundness: roundness,
    };
    this.text = text;
  }
  interactionArea() {
    push();
    rectMode(CENTER);
    fill(
      this.interactionColor[0],
      this.interactionColor[1],
      this.interactionColor[2],
      this.interactionColor[3]
    );
    noStroke();
    rect(
      this.pos.x,
      this.pos.y,
      this.shape.x,
      this.shape.y,
      this.shape.roundness
    );
    pop();
  }
  display() {
    push();
    rectMode(CENTER);
    fill(
      this.displayedColor[0],
      this.displayedColor[1],
      this.displayedColor[2]
    );
    strokeWeight(5);
    rect(
      this.pos.x,
      this.pos.y,
      this.shape.x,
      this.shape.y,
      this.shape.roundness
    );
    fill(255, 255, 255);
    textAlign(CENTER);
    textSize(20);
    text(this.text, this.pos.x, this.pos.y + 9);
    pop();
  }
}
