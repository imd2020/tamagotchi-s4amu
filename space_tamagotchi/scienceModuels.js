import Station from "./SpaceTamagotchi.js";

export class ScienceModule extends Station {
  constructor() {
    super();
    this.efficiencyFactor = 2;
  }

  parallax() {
    this.offset.x = mouseX - width / 2;
    this.offset.y = mouseY - height / 2;
    this.pos.x = width / 2 - this.offset.x / 80;
    this.pos.y = height / 2 + 5 - this.offset.y / 80;
  }

  display(assets) {
    this.parallax();
    image(
      assets.visuals.scienceModules,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
  }
}
