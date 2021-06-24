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
    };
    this.currency = 0;
    this.offset = {
      x: 0,
      y: 0,
    };
  }

  moduleInteraction(stationAssets) {
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
  }

  display(assets) {
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
