import Station from "./SpaceTamagotchi.js";

export class ScienceModule extends Station {
  constructor() {
    super();
  }

  perk() {}

  display(assets) {
    image(
      assets.visuals.scienceModules,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
  }
}
