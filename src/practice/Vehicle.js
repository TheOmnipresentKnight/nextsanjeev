class Vehicle {
  constructor(speed, color, fuel) {
    // Private attributes
    this._speed = speed; // Speed in miles per hour
    this._color = color;
    this._fuel = fuel; // Fuel level in percentage
  }

  // Public methods to interact with encapsulated data
  accelerate(increaseSpeed) {
    // Implementation logic to increase speed

    if (increaseSpeed > 0) {
      this._speed += increaseSpeed;
    }
  }

  brake(decreaseSpeed) {
    // Implementation logic to decrease speed
    if (decreaseSpeed > 0) {
      if (this._speed >= decreaseSpeed) {
        this._speed -= decreaseSpeed;
      } else {
        this._speed = 0;
      }
    }
  }

  getSpeed() {
    return this._speed;
  }

  getColor() {
    return this._color;
  }

  getFuelLevel() {
    return this._fuel;
  }
}
module.exports = Vehicle;
