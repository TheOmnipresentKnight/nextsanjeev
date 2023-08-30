const Car = require("./Car");

class SportsCar extends Car {
  constructor(name, color, speed) {
    super(name, color, speed, "sports");
  }

  describe() {
    super.describe();
    console.log("It's a sports car.");
  }
}

module.exports = SportsCar;
