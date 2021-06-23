export default class Station {
  constructor() {
    this.pos = {
      x: width / 2,
      y: height / 2,
    };
    this.format = 800;
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

  interactionShop(resultKey, currency) {
    this.currency = currency;
    if (resultKey === "scienceModules" && this.currency >= 100) {
      this.modules.science = true;
      this.currency -= 100;
    }
    if (resultKey === "module1" && this.currency >= 100) {
      this.modules.moduleExtension = true;
      this.currency -= 100;
    }
    if (resultKey === "shipyard" && this.currency >= 200) {
      this.modules.shipyard = true;
      this.currency -= 200;
    }
    console.log(this.currency);
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

  moduleSystem(stationAssets, shopScreen) {
    imageMode(CENTER);
    if (this.modules.science === true) {
      image(
        stationAssets.visuals.scienceModules,
        this.pos.x,
        this.pos.y,
        this.format,
        this.format
      );
    }
    if (this.modules.main === true) {
      image(
        stationAssets.visuals.mainModule,
        this.pos.x,
        this.pos.y,
        this.format,
        this.format
      );
    }
    if (this.modules.shipyard === true) {
      image(
        stationAssets.visuals.shipyard,
        this.pos.x,
        this.pos.y,
        this.format,
        this.format
      );
    }
    if (this.modules.moduleExtension === true) {
      image(
        stationAssets.visuals.moduleExtension1,
        this.pos.x,
        this.pos.y,
        this.format,
        this.format
      );
    }
    if (this.modules.spacebus === true) {
      image(
        stationAssets.visuals.spaceBus,
        this.pos.x,
        this.pos.y,
        this.format,
        this.format
      );
    }
    if (shopScreen === true) {
      image(stationAssets.visuals.shopscreen, width / 2, height / 2, 1000, 700);
    }
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
