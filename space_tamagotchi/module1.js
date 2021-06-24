import Station from "./SpaceTamagotchi.js";

export class Module1 extends Station {
  constructor() {
    super();
    this.setup = false;
  }

  parallax() {
    this.offset.x = mouseX - width / 2;
    this.offset.y = mouseY - height / 2;
    this.pos.x = width / 2 - this.offset.x / 58;
    this.pos.y = height / 2 - this.offset.y / 58;
  }

  perk() {
    if (this.setup === false && this.active === true) {
      this.solarPanelMaintenence = 20;
      this.electrolyseMaintenance = 20;
      this.water = 20;
      this.setup = true;
    } else {
      this.solarPanelMaintenence = 0;
      this.electrolyseMaintenance = 0;
      this.water = 0;
    }
  }

  reset() {
    this.active = false;
    this.setup = false;
  }

  display(assets) {
    if (this.active === true) {
      this.parallax();
      image(
        assets.visuals.moduleExtension1,
        this.pos.x,
        this.pos.y,
        this.format,
        this.format
      );
    }
  }
}
