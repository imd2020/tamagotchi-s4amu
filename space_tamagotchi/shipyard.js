import Station from "./SpaceTamagotchi.js";

export class Shipyard extends Station {
  constructor() {
    super();
    this.enableSpaceBus = false;
  }

  reset() {
    this.enableSpaceBus = false;
    this.active = false;
  }

  spaceBsusControl(resultKey) {
    if (resultKey === "spaceBus" && this.enableSpaceBus === false) {
      this.enableSpaceBus = true;
    } else if (resultKey === "spaceBus" && this.enableSpaceBus === true) {
      this.enableSpaceBus = false;
    }
  }

  parallax() {
    this.offset.x = mouseX - width / 2;
    this.offset.y = mouseY - height / 2;
    this.pos.x = width / 2 - this.offset.x / 60;
    this.pos.y = height / 2 - this.offset.y / 60;
  }

  interactionArea(assets) {
    if (this.active === true) {
      this.parallax();
      image(
        assets.interactionArea.shipyard,
        this.pos.x,
        this.pos.y,
        this.format,
        this.format
      );
    }
  }

  display(assets) {
    if (this.active === true) {
      this.parallax();
      image(
        assets.visuals.shipyard,
        this.pos.x,
        this.pos.y,
        this.format,
        this.format
      );
    }
  }
}
