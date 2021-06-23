import ParameterEngine from "./ParameterNetwork.js";
import Station from "./SpaceTamagotchi.js";
import Button from "./button.js";
import Background from "./screenVisuals.js";

window.preload = preload;
window.draw = draw;
window.setup = setup;
window.mouseClicked = mouseClicked;

let parameterEngine = new ParameterEngine();
let station = new Station();
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
  },
  interactionArea: {
    shop: "",
    solarPanels: "",
    electrolyse: "",
    orderWater: "",
    shopscreen: "",
    shopscreenClose: "",
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
  20
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
  10
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
  20
);
let starBackground = new Background();

colorDict.set("shop", [100, 200, 30, 255]);
colorDict.set("solarPanels", [110, 200, 190, 255]);
colorDict.set("electrolyse", [120, 210, 180, 255]);
colorDict.set("orderWater", [140, 220, 170, 255]);
colorDict.set("shopScreenClose", [130, 230, 255, 255]);
colorDict.set("module1", [130, 130, 230, 255]);
colorDict.set("scienceModules", [130, 230, 230, 255]);
colorDict.set("shipyard", [130, 30, 230, 255]);
colorDict.set("testStartButton", [30, 30, 243, 255]);
colorDict.set("testRestartButton", [30, 30, 244, 255]);
colorDict.set("testHowtoButton", [30, 40, 212, 255]);

function preload() {
  assets.visuals.howtoScreen = loadImage("assets/howtoScreen.png");
  assets.visuals.mainModule = loadImage("assets/mainModule.png");
  assets.visuals.moduleExtension1 = loadImage("assets/moduleExtension1.png");
  assets.visuals.scienceModules = loadImage("assets/scienceModules.png");
  assets.visuals.shipyard = loadImage("assets/shipyard.png");
  assets.visuals.spaceBus = loadImage("assets/spaceBus.png");
  assets.visuals.shopscreen = loadImage("assets/shopscreen.png");
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
}

function startScreen() {
  if (state === "startScreen") {
    starBackground.displayBackground();
    startButton.interactionArea();
    howtoButton.interactionArea();
    clickedColor = get(mouseX, mouseY);
    startButton.display();
    howtoButton.display();
  }
}

function howtoScreen() {
  if (state === "howtoScreen") {
    starBackground.displayBackground();
    imageMode(CENTER);
    image(assets.visuals.howtoScreen, width / 2, height / 2, 700, 500);
  }
  if (backClick === true) {
    state = "startScreen";
    backClick = false;
  }
}

function gameScreen() {
  if (state === "gameScreen") {
    starBackground.displayBackground();
    station.moduleInteraction(assets, shopScreen);
    clickedColor = get(mouseX, mouseY);
    station.moduleSystem(assets, shopScreen);
    parameterEngine.parameterNet(state);
    parameterEngine.timeDelay();
    parameterEngine.gameScore();
    parameterEngine.testDisplay();
    if (parameterEngine.lose() === true) {
      state = "scoreScreen";
    }
  }
}

function scoreScreen() {
  if (state === "scoreScreen") {
    starBackground.displayBackground();
    restart.interactionArea();
    clickedColor = get(mouseX, mouseY);
    restart.display();
  }
}

function compareArray(arrayA, arrayB) {
  for (let i = 0; i <= arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
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

  if (resultKey === "shop") {
    shopScreen = true;
  }
  if (shopScreen === true && resultKey === "shopScreenClose") {
    shopScreen = false;
  }

  if (state === "howtoScreen") {
    backClick = true;
  }

  if (resultKey === "testStartButton") {
    state = "gameScreen";
  } else if (resultKey === "testHowtoButton") {
    state = "howtoScreen";
  }

  if (resultKey === "testRestartButton") {
    station.restart();
    parameterEngine.restart();
    state = "startScreen";
  }

  station.interactionShop(resultKey, parameterEngine.currency);
  parameterEngine.currencyCheck(station.currency);
  parameterEngine.interactionNet(resultKey, shopScreen);
  console.log(state);
  console.log(shopScreen);
  console.log(resultKey);
}
