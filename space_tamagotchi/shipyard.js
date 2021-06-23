import Station from "./SpaceTamagotchi.js";

export class Shipyard extends Station {
  constructor() {
    super();
  }

  spacebus(resultKey) {
    if (resultKey === "spaceBus" && this.modules.spacebus === true) {
      this.modules.spacebus = true;
      console.log("iasgdiausgdh");
    } else if (resultKey === "spaceBus" && this.modules.spacebus === false) {
      this.modules.spacebus = false;
    }
  }

  interactionArea(assets) {
    image(
      assets.interactionArea.shipyard,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
  }

  display(assets) {
    image(
      assets.visuals.shipyard,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
  }
}
