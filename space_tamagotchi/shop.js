import Station from "./SpaceTamagotchi.js";

export class Shop extends Station {
  constructor() {
    super();
  }

  interactionArea(assets, shopScreen) {
    if (shopScreen === true) {
      image(
        assets.interactionArea.shopscreenClose,
        width / 2,
        height / 2,
        1000,
        700
      );
      image(
        assets.interactionArea.shopscreen,
        width / 2,
        height / 2,
        1000,
        700
      );
    }
  }

  interactionShop(resultKey, currency) {
    this.currency = currency;
    if (
      resultKey === "scienceModules" &&
      this.currency >= 1 &&
      this.modules.science === false
    ) {
      this.modules.science = true;
      this.currency -= 1;
    }
    if (
      resultKey === "module1" &&
      this.currency >= 1 &&
      this.modules.moduleExtension === false
    ) {
      this.modules.moduleExtension = true;
      this.currency -= 1;
    }
    if (
      resultKey === "shipyard" &&
      this.currency >= 1 &&
      this.modules.shipyard === false
    ) {
      this.modules.shipyard = true;
      this.currency -= 1;
    }
  }

  shop(assets, shopScreen) {
    if (shopScreen === true) {
      image(assets.visuals.shopscreen, width / 2, height / 2, 1000, 700);
      push();
      textSize(13);
      text(
        "Science Modules Cost: 600 Increaces the efficiency of the Station",
        width / 2 + 90,
        height / 2 + 40,
        80,
        200
      );
      text(
        "Extencion Modules Cost: 1000 Increaces every parameter by 20 when installed",
        width / 2 - 40,
        height / 2 + 40,
        80,
        200
      );
      text("Shipyard Cost: 1000 ", width / 2 - 170, height / 2 + 40, 80, 200);
      pop();
    }
  }
}
