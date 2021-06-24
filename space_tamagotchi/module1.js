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
    if (this.setup === false) {
      this.solarPanelMaintenence += 50;
      this.electrolyseMaintenance += 50;
      this.water += 50;
      this.setup = true;
    }
  }

  display(assets) {
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
