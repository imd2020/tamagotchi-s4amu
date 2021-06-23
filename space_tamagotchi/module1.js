import Station from "./SpaceTamagotchi.js";

export class Module1 extends Station {
  constructor() {
    super();
  }

  display(assets) {
    image(
      assets.visuals.moduleExtension1,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
  }
}
