export default class ParameterEngine {
  constructor() {
    this.solarPanelMaintenence = random(40, 60);
    this.electrolyseMaintenance = random(40, 60);
    this.water = random(40, 60);

    this.subScore = 0;
    this.score = 0;
    this.currency = 0;
    this.scoreSpeedFatcor = 3000;
    this.currencySpeedFactor = 800;
    this.inSeconds = 30;

    this.orderWater = false;
    this.orderWaterCounter = 0;

    this.checkingElectrolyse = false;
    this.workCounterElectrolyse = 0;

    this.checkingSolarPanels = false;
    this.workCounterSolarPanels = 0;

    this.working = false;
  }

  timeDelay() {
    if (this.orderWater === true) {
      this.orderWaterCounter += 1 / this.inSeconds;
    }
    if (this.orderWaterCounter >= 15) {
      this.water += 30;
      this.orderWater = false;
      this.orderWaterCounter = 0;
      this.working = false;
    }

    if (this.checkingElectrolyse === true) {
      this.workCounterElectrolyse += 1 / this.inSeconds;
    }
    if (this.workCounterElectrolyse >= 10) {
      this.electrolyseMaintenance += 25;
      this.checkingElectrolyse = false;
      this.workCounterElectrolyse = 0;
      this.working = false;
    }

    if (this.checkingSolarPanels === true) {
      this.workCounterSolarPanels += 1 / this.inSeconds;
    }
    if (this.workCounterSolarPanels >= 10) {
      this.solarPanelMaintenence += 25;
      this.checkingSolarPanels = false;
      this.workCounterSolarPanels = 0;
      this.working = false;
    }
  }

  parameterNet(state) {
    this.electrolyseMaintenance -= random(0.3, 0.5) / this.inSeconds;
    this.solarPanelMaintenence -= random(0.3, 0.5) / this.inSeconds;
    this.water -= random(0.3, 0.5) / this.inSeconds;

    if (this.solarPanelMaintenence <= 30) {
      this.electrolyseMaintenance -= 1 / this.inSeconds;
    }
    if (this.water <= 40) {
      this.electrolyseMaintenance -= 1 / this.inSeconds;
    }

    if (this.electrolyseMaintenance > 200) {
      this.electrolyseMaintenance = 200;
    }
    if (this.solarPanelMaintenence > 200) {
      this.solarPanelMaintenence = 200;
    }
    if (this.water > 200) {
      this.water = 200;
    }
  }

  lose() {
    if (
      this.electrolyseMaintenance <= 0 ||
      this.solarPanelMaintenence <= 0 ||
      this.water <= 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  gameScore() {
    this.subScore =
      this.electrolyseMaintenance + this.solarPanelMaintenence + this.water;
    this.score += this.subScore / this.scoreSpeedFatcor;
    this.currency += this.subScore / this.currencySpeedFactor;
    if (this.score <= -25) {
    }
  }

  currencyCheck(currency) {
    this.currency = currency;
  }

  interactionNet(resultKey) {
    if (
      this.orderWater === false &&
      this.checkingElectrolyse === false &&
      this.checkingSolarPanels === false
    ) {
      if (resultKey === "solarPanels") {
        this.checkingSolarPanels = true;
        this.working = true;
      } else if (resultKey === "electrolyse") {
        this.checkingElectrolyse = true;
        this.working = true;
      } else if (resultKey === "orderWater") {
        this.orderWater = true;
        this.working = true;
      }
    }
  }

  restart() {
    this.solarPanelMaintenence = random(40, 60);
    this.electrolyseMaintenance = random(40, 60);
    this.water = random(40, 60);

    this.subScore = 0;
    this.score = 0;
    this.currency = 0;
    this.orderWater = false;
    this.orderWaterCounter = 0;

    this.checkingElectrolyse = false;
    this.workCounterElectrolyse = 0;

    this.checkingSolarPanels = false;
    this.workCounterSolarPanels = 0;

    this.working = false;
  }

  testDisplay() {
    push();
    fill(255, 255, 255);
    text("O2: " + round(this.electrolyseMaintenance), 20, 100);
    text("Electricity: " + round(this.solarPanelMaintenence), 20, 120);
    text("Water: " + round(this.water), 20, 140);
    text("Score: " + round(this.score), 20, 160);
    text("Money: " + round(this.currency), 20, 180);
    text("OrderWater: " + round(this.orderWaterCounter), 20, 200);
    text(
      "Working on Solarpanels: " + round(this.workCounterSolarPanels),
      20,
      220
    );
    text(
      "Working on Electrolyse: " + round(this.workCounterElectrolyse),
      20,
      240
    );
    if (this.working === true) {
      text("Working...", 20, 260);
    }
    pop();
  }
}
