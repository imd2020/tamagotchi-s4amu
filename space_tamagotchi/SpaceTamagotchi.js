export default class Station {
  constructor() {
    this.pos = {
      x: width / 2,
      y: height / 2,
    };
    this.format = 800;
    this.modules = {
      science: false,
      shipyard: false,
      spacebus: false,
      moduleExtension: false,
      shopScreen: false,
    };
    this.currency = 0;
    this.offset = {
      x: 0,
      y: 0,
    };
  }

  interactionShop(resultKey, currency) {
    this.currency = currency;
    if (
      resultKey === "scienceModules" &&
      this.currency >= 100 &&
      this.modules.science === false
    ) {
      this.modules.science = true;
      this.currency -= 100;
    }
    if (
      resultKey === "module1" &&
      this.currency >= 100 &&
      this.modules.moduleExtension === false
    ) {
      this.modules.moduleExtension = true;
      this.currency -= 100;
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
    }
  }

  moduleInteraction(stationAssets, shopScreen) {
    image(
      stationAssets.interactionArea.orderWater,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
    image(
      stationAssets.interactionArea.shop,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
    image(
      stationAssets.interactionArea.solarPanels,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
    image(
      stationAssets.interactionArea.electrolyse,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
    if (shopScreen === true) {
      image(
        stationAssets.interactionArea.shopscreenClose,
        width / 2,
        height / 2,
        1000,
        700
      );
      image(
        stationAssets.interactionArea.shopscreen,
        width / 2,
        height / 2,
        1000,
        700
      );
    }
  }

  mainModule(assets) {
    imageMode(CENTER);
    image(
      assets.visuals.mainModule,
      this.pos.x,
      this.pos.y,
      this.format,
      this.format
    );
  }

  parallax() {
    this.offset.x = mouseX - width / 2;
    this.offset.y = mouseY - height / 2;
    this.pos.x = width / 2 - this.offset.x / 70;
    this.pos.y = height / 2 - this.offset.y / 70;
  }

  restart() {
    this.modules = {
      main: true,
      science: false,
      shipyard: false,
      spacebus: false,
      moduleExtension: false,
      shopScreen: false,
    };
    this.currency = 0;
  }
}
