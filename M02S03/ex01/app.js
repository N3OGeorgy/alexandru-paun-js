class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    this.domId = `${this.make.toLowerCase()}${this.color}${Date.now()}`;

    this.displayDomSpeed();
  }

  accelerate(speed) {
    this.speed += speed;
    this.displayDomSpeed();
    return this;
  }

  decelerate(speed) {
    this.speed -= speed;
    this.displayDomSpeed();
    return this;
  }

  setSpeed(speed) {
    this.speed = speed;
    this.displayDomSpeed();
    return this;
  }

  displayDomSpeed() {
    let speedDial = document.getElementById(this.domId);

    if (speedDial === null) {
      speedDial = document.createElement('div');
    }

    speedDial.id = this.domId;
    speedDial.innerText = `${this.speed}km/h`;
    document.body.append(speedDial);
  }
}

var audi = new Car('Audi', 'black', 4, 0);

audi.accelerate(12).decelerate(3).decelerate(4);
audi.setSpeed(4).accelerate(1);
