// Base class: Vehicle
class Vehicle {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  accelerate(increaseSpeed) {
    this.speed += increaseSpeed;
    console.log(`${this.name} accelerates to ${this.speed} mph.`);
  }

  brake(decreaseSpeed) {
    this.speed -= decreaseSpeed;
    console.log(`${this.name} slows down to ${this.speed} mph.`);
  }

  describe() {
    console.log(`This ${this.name} vehicle is ${this.color} in color.`);
  }
}

module.exports = Vehicle;
