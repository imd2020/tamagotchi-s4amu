import ParameterEngine from "./ParameterNetwork.js";
import Station from "./SpaceTamagotchi.js";
import Button from "./button.js";
import Background from "./background.js";
import { ScienceModule } from "./scienceModuels.js";
import { Shipyard } from "./shipyard.js";
import { Module1 } from "./module1.js";
import { SpaceBus } from "./spacebus.js";
import { Shop } from "./shop.js";
import { compareArray } from "./functions.js";

window.preload = preload;
window.draw = draw;
window.setup = setup;
window.mouseClicked = mouseClicked;

let state = "startScreen";
let assets = {
  visuals: {
    mainModule: "",
    moduleExtension1: "",
    scienceModules: "",
    shipyard: "",
    spaceBus: "",
    shopscreen: "",
    howtoScreen: "",
    freighter: "",
    planet: "",
    title: "",
  },
  interactionArea: {
    shop: "",
    solarPanels: "",
    electrolyse: "",
    orderWater: "",
    shopscreen: "",
    shopscreenClose: "",
    shipyard: "",
  },
};
let clickedColor;
let colorDict = new Map();
let shopScreen = false;
let backClick = false;

let startButton = new Button(
  122,
  201,
  184,
  30,
  30,
  243,
  255,
  width / 2,
  height / 2,
  200,
  100,
  20,
  "Start"
);
let howtoButton = new Button(
  122,
  201,
  184,
  30,
  40,
  212,
  255,
  width / 2,
  height / 2 + 100,
  150,
  50,
  10,
  "Controls"
);
let restart = new Button(
  210,
  42,
  42,
  30,
  30,
  244,
  255,
  width / 2,
  height / 2,
  200,
  100,
  20,
  "Restart"
);
let gameBackground = new Background();
let module1 = new Module1();
let shipyard = new Shipyard();
let scienceModule = new ScienceModule();
let spaceBus = new SpaceBus();
let shop = new Shop();
let parameterEngine = new ParameterEngine();
let station = new Station();

colorDict.set("shop", [100, 200, 30, 255]);
colorDict.set("solarPanels", [110, 200, 190, 255]);
colorDict.set("electrolyse", [120, 210, 180, 255]);
colorDict.set("orderWater", [140, 220, 170, 255]);
colorDict.set("shopScreenClose", [130, 230, 255, 255]);
colorDict.set("module1", [130, 130, 230, 255]);
colorDict.set("scienceModules", [130, 230, 230, 255]);
colorDict.set("shipyard", [130, 30, 230, 255]);
colorDict.set("startButton", [30, 30, 243, 255]);
colorDict.set("restartButton", [30, 30, 244, 255]);
colorDict.set("howtoButton", [30, 40, 212, 255]);
colorDict.set("spaceBus", [255, 0, 255, 255]);

function preload() {
  assets.visuals.howtoScreen = loadImage("assets/howtoScreen.png");
  assets.visuals.mainModule = loadImage("assets/mainModule.png");
  assets.visuals.moduleExtension1 = loadImage("assets/moduleExtension1.png");
  assets.visuals.scienceModules = loadImage("assets/scienceModules.png");
  assets.visuals.shipyard = loadImage("assets/shipyard.png");
  assets.visuals.spaceBus = loadImage("assets/spaceBus.png");
  assets.visuals.shopscreen = loadImage("assets/shopscreen.png");
  assets.visuals.freighter = loadImage("assets/freighter.png");
  assets.visuals.planet = loadImage("assets/planet.png");
  assets.visuals.title = loadImage("assets/title.png");

  assets.interactionArea.shop = loadImage("assets/interactionShop.png"); //(100,200,30)
  assets.interactionArea.solarPanels = loadImage(
    "assets/interactionSolarpanels.png" //(110,200,190)
  );
  assets.interactionArea.electrolyse = loadImage(
    "assets/interactionElectrolyse.png"
  ); //(120,210,180)
  assets.interactionArea.orderWater = loadImage(
    "assets/interactionOrderWater.png"
  ); //(140,220,170)
  assets.interactionArea.shopscreen = loadImage(
    "assets/interactionShopscreen.png"
  ); //(130,30,230)(130,130,230)(130,230,230)
  assets.interactionArea.shopscreenClose = loadImage(
    "assets/interactionShopscreenClose.png"
  ); //(130,230,255)
  assets.interactionArea.shipyard = loadImage("assets/interactionShipyard.png"); //(255,0,255);
}

function startScreen() {
  if (state === "startScreen") {
    gameBackground.displayBackground();
    gameBackground.freighter(assets);
    gameBackground.title(assets);
    startButton.interactionArea();
    howtoButton.interactionArea();
    clickedColor = get(mouseX, mouseY);
    startButton.display();
    howtoButton.display();
  }
}

function howtoScreen() {
  if (state === "howtoScreen") {
    gameBackground.displayBackground();
    gameBackground.freighter(assets);
    imageMode(CENTER);
    image(assets.visuals.howtoScreen, width / 2, height / 2, 700, 500);
  }
}

function ifClick(resultKey) {
  if (resultKey === "shop") {
    shopScreen = true;
  }
  if (shopScreen === true && resultKey === "shopScreenClose") {
    shopScreen = false;
  }

  if (state === "howtoScreen") {
    backClick = true;
  }

  if (resultKey === "startButton") {
    state = "gameScreen";
  } else if (resultKey === "howtoButton") {
    state = "howtoScreen";
  }

  if (resultKey === "restartButton") {
    station.restart();
    parameterEngine.restart();
    state = "startScreen";
  }

  if (backClick === true && state === "howtoScreen") {
    state = "startScreen";
    backClick = false;
  }
}

gameBackground.animation();
gameBackground.titleAnimation();
spaceBus.animation();

function gameScreen() {
  if (state === "gameScreen") {
    gameBackground.displayBackground();
    gameBackground.freighter(assets);
    station.parallax();
    station.moduleInteraction(assets);
    shipyard.interactionArea(assets);
    shop.interactionArea(assets, shopScreen);

    clickedColor = get(mouseX, mouseY);

    spaceBus.display(assets);
    scienceModule.display(assets);
    parameterEngine.efficiencyFactor = scienceModule.efficiencyFactor;
    station.display(assets);
    shipyard.display(assets);
    module1.perk();
    parameterEngine.solarPanelMaintenence += module1.solarPanelMaintenence;
    parameterEngine.electrolyseMaintenance += module1.electrolyseMaintenance;
    parameterEngine.water += module1.water;
    module1.display(assets);
    parameterEngine.parameterNet(state);
    parameterEngine.timeDelay();
    parameterEngine.gameScore();
    parameterEngine.display();
    shop.shop(assets, shopScreen);
    if (parameterEngine.lose() === true) {
      state = "scoreScreen";
      shop.reset();
      shipyard.reset();
      module1.reset();
      scienceModule.reset();
      spaceBus.reset();
    }
  }
}

function scoreScreen() {
  if (state === "scoreScreen") {
    gameBackground.displayBackground();
    gameBackground.freighter(assets);
    restart.interactionArea();
    clickedColor = get(mouseX, mouseY);
    restart.display();
    push();
    textAlign(CENTER);
    textSize(20);
    fill(255, 255, 255);
    text(
      "Your Score is: " + round(parameterEngine.score),
      width / 2,
      height / 2 - 100
    );
    pop();
  }
}

function draw() {
  startScreen();
  howtoScreen();
  gameScreen();
  scoreScreen();
}

function mouseClicked() {
  let resultKey;
  colorDict.forEach((value, key) => {
    if (compareArray(clickedColor, value) === true) {
      resultKey = key;
    }
  });

  ifClick(resultKey);

  shipyard.spaceBsusControl(resultKey);
  spaceBus.active = shipyard.enableSpaceBus;
  shop.interactionShop(resultKey, parameterEngine.currency);
  module1.active = shop.modules.module1;
  shipyard.active = shop.modules.shipyard;
  scienceModule.active = shop.modules.science;

  parameterEngine.currencyCheck(shop.currency);
  parameterEngine.interactionNet(resultKey, shopScreen);

  console.log(scienceModule.active);
  console.log(resultKey);
}
