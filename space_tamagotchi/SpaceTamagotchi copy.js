export default class VisualEngine {
  constructor(vanishingPointX, vanishingPointY) {
    this.vanishingPoint = {
      x: vanishingPointX,
      y: vanishingPointY,
    };
    this.movementPoints = {
      point1: {
        x: 0,
        y: 0,
      },
      point2: {
        x: 0,
        y: 0,
      },
    };
    this.visualVectors = {
      vectorTop: {
        x: 0,
        y: 0,
        angle: 0,
      },
      vectorBottom: {
        x: 0,
        y: 0,
        angle: 0,
      },
    };
    this.quadPoints = {
      point1: {
        x: 0,
        y: 0,
      },
      point2: {
        x: 0,
        y: 0,
      },
      point3: {
        x: 0,
        y: 0,
      },
      point4: {
        x: 0,
        y: 0,
      },
    };
    this.distance = {
      top: 1,
      bottom: 1,
    };
  }

  calculateDistanceXOffset() {}

  calculateVisualVectors(point1X, point1Y, point2X, point2Y) {
    this.movementPoints.point1.x = point1X;
    this.movementPoints.point1.y = point1Y;
    this.movementPoints.point2.x = point2X;
    this.movementPoints.point2.y = point2Y;

    this.visualVectors.vectorTop.x =
      this.movementPoints.point1.x - this.vanishingPoint.x;
    this.visualVectors.vectorTop.y =
      this.movementPoints.point1.y - this.vanishingPoint.y;

    this.visualVectors.vectorTop.x =
      this.movementPoints.point2.x - this.vanishingPoint.x;
    this.visualVectors.vectorTop.y =
      this.movementPoints.point2.y - this.vanishingPoint.y;

    this.visualVectors.vectorTop.angle =
      (Math.atan2(
        this.visualVectors.vectorTop.x,
        this.visualVectors.vectorTop.y
      ) *
        180) /
      Math.PI;
  }

  calculateQuadvectors() {
    this.quadPoints.point2.x =
      this.movementPoints.point1.x +
      this.distance.top * sin(this.visualVectors.vectorTop.angle);
    this.quadPoints.point2.y =
      this.movementPoints.point1.y +
      this.distance.top * sin(this.visualVectors.vectorTop.angle);

    this.quadPoints.point3.x =
      this.movementPoints.point2.x +
      this.distance.bottom * sin(this.visualVectors.vectorTop.angle);
    this.quadPoints.point3.y =
      this.movementPoints.point2.y +
      this.distance.bottom * sin(this.visualVectors.vectorTop.angle);

    this.quadPoints.point1.x = this.movementPoints.point1.x;
    this.quadPoints.point1.y = this.movementPoints.point1.y;
    this.quadPoints.point4.x = this.movementPoints.point2.x;
    this.quadPoints.point4.y = this.movementPoints.point2.y;
  }
}

export class Module1 extends VisualEngine {
  constructor() {}
}

export class Module2 extends VisualEngine {
  constructor() {}
}
