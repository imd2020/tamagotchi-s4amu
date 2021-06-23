import Station from "./SpaceTamagotchi.js";

export class ScienceModule extends Station {
  constructor() {
    super();
    this.efficiencyFactor = 2;
  }

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
