const Vehicle = require("./Vehicle");

class Motorcycle extends Vehicle {
  constructor(speed, color, fuel) {
    super(speed, color, fuel);
  }
  describe() {
    console.log(
      `Motorcycle: \n speed ${this._speed}, color ${
        this._color
      } and has fuel: ${this.getFuelLevel()}`
    );
  }
}


module.exports = Motorcycle;
