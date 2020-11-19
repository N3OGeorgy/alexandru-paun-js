let Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 100,
  topReverseSpeed: -50,
  lights: true,

  displaySpeed: function () {
    console.log(
      `Vehiculul ${this.make} se deplasa cu viteza ${this.speed}km/h.`,
    );
  },
  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }

    this.displaySpeed();
  },
  turnLightsOn: function () {
    this.lights = true;
  },
  turnLightsOff: function () {
    this.lights = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    setTimeout(this.turnLightsOff, 1000 * 3);
  },
};

let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 140;

console.log(audi);
audi.flashLights();
console.log(audi);
setTimeout(console.log(audi), 1000000 * 6);
