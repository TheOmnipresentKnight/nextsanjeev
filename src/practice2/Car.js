const Vehicle = require("./Vehicle");
// Subclass: Car
class Car extends Vehicle {
  constructor(name, color, speed, carType) {
    super(name, color, speed);
    this.carType = carType;
  }

  describe() {
    super.describe();
    console.log(`It's a ${this.carType} car.`);
  }
}

module.exports = Car;
