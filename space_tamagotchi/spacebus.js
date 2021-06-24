import Station from "./SpaceTamagotchi.js";

export class SpaceBus extends Station {
  constructor() {
    super();
    this.setup = true;
  }

  reset() {
    this.active = false;
  }

  animation() {
    gsap.to(this.pos, {
      y: height / 2 + 20,
      duration: 5,
      ease: "easeOut",
      repeat: -1,
      yoyoEase: true,
      yoyo: true,
    });
  }

  display(assets) {
    if (this.active === true) {
      image(
        assets.visuals.spaceBus,
        this.pos.x - 20,
        this.pos.y,
        this.format,
        this.format
      );
    }
  }
}
