import Station from "./SpaceTamagotchi.js";

export class Shipyard extends Station {
  constructor() {
    super();
  }

  busControl(resultKey) {
    console.log("iasgdiausgdh");
    if (resultKey === "spaceBus" && this.modules.spacebus === false) {
      this.modules.spacebus = true;
    } else if (resultKey === "spaceBus" && this.modules.spacebus === true) {
      this.modules.spacebus = false;
    }
  }

  parallax() {
    this.offset.x = mouseX - width / 2;
    this.offset.y = mouseY - height / 2;
    this.pos.x = width / 2 - this.offset.x / 60;
    this.pos.y = height / 2 - this.offset.y / 60;
  }

  interactionArea(assets) {
    this.parallax();
    image(
      assets.interactionArea.shipyard,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
  }

  display(assets) {
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
