import Station from "./SpaceTamagotchi.js";

export class SpaceBus extends Station {
  constructor() {
    super();
  }

  display(assets) {
    image(
      assets.visuals.SpaceBus,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
  }
}
