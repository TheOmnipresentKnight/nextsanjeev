const Car = require("./Car");
const Motorcycle = require("./MotorCycle");

class SportsBike extends Motorcycle {
  constructor(speed, color, fuel, engineType) {
    super(speed, color, fuel);
    this.engineType = engineType;
  }

  getBikeEngineType() {
    console.log(`This is a ${this.engineType} type engine`);
  }
}

class SportsCar extends Car {
  constructor(speed, color, fuel, engineType) {
    super(speed, color, fuel, engineType);
    this.engineType = engineType;
  }

  getCarEngineType() {
    console.log(`This is a ${this.engineType} type engine`);
  }
}

SportsBike.prototype.getFullSportsBikeDescription = function () {
  console.log(
    `This ${this._color} sports bike is a very very fast because it has a ${this.engineType} engine...`
  );
};

const bike = new SportsBike(245, "Green", 80, "2-stroke");

// bike.accelerate(1010);
// bike.getFullSportsBikeDescription();

SportsCar.prototype.getFullSportsCarDescription = function () {
  console.log(
    `This ${this._color} sports car is a very very fast because it has a ${this.engineType} engine...`
  );
};

const sportsCar = new SportsCar(456, "Blue", 80, "8L W16 quad-turbocharged");
sportsCar.getFullSportsCarDescription();
