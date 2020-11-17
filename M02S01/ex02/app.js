class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log('1.Viteza curenta este: ' + this.speed);
    console.log(`2.Viteza curenta este: ${this.speed}`);
  }

  getSpeed(format) {
    let speed = format === true ? `${this.speed}km/h` : this.speed;
    return speed;
  }

  accelerate() {
    let newSpeed = this.speed + 1;
    this.setSpeed(newSpeed);
  }

  decelerate() {
    let newSpeed = this.speed - 1;
    this.setSpeed(newSpeed);
  }

  stop() {
    this.setSpeed(0);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();
      return;
    }

    this.speed = speed;
    this.displaySpeed();
    return;
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 6, speed, topSpeed, topReverseSpeed);
  }
}

let newCar = new Car('myCar', 'blue', '50', 150, -50);
console.log(newCar);

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  // decelerate() {
  //   if (--this.speed < this.topReverseSpeed) {
  //     this.speed = this.topReverseSpeed;
  //   }
  //   this.displaySpeed();
  // }
}

let newBike = new Bicycle('pegas', 'red', 8, 20);
newBike.setSpeed(2);
newBike.decelerate();
newBike.decelerate();
newBike.decelerate();
console.log(newBike);
newBike.setSpeed(-10);

// Creeaza o noua clasa care extinde Vehicle in mod similar cu Bicycle, numita Tricycle. Diferenta fiind ca o tricicleta are trei roti.
// Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2, viteza minima -2, viteza maxima 9). O poti stoca intr-o variabila numita trike.
// Seteaza viteza instantei trike la 0
// Foloseste metoda decelerate() de trei ori, ce observi?
// Seteaza viteza instantei trike la -10, ce observi?

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 3, speed, topSpeed, topReverseSpeed);
  }
}

let newTrike = new Tricycle('Tryke', 'red', 2, 9, -2);
newTrike.setSpeed(0);
newTrike.decelerate();
newTrike.decelerate();
newTrike.decelerate();
console.log(newTrike);

// Creeaza o masina noua (marca Audi, culoare blue, viteza curenta 3, viteza maxima 140, viteza minima -50).
// Seteaza viteza noii instante la 140, apoi ruleaza metoda accelerate(), ce observi?

let audi = new Car('Audi', 'blue', 3, 140, -50);
audi.setSpeed(150);
audi.accelerate();
