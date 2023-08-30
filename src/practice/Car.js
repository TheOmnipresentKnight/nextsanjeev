const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  constructor(speed, color, fuel) {
    super(speed, color, fuel);
  }

  describe() {
    console.log(
      `Car:\n speed ${this._speed}, color ${
        this._color
      } and has fuel: ${this.getFuelLevel()}`
    );
  }
}


module.exports = Car;
