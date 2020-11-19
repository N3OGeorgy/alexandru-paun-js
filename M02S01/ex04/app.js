class Car {
  constructor(left = 210, top = 8, color) {
    this.left = left;
    this.top = top;
    this.color = color;
  }

  frame = document.createElement('div');
  car = document.createElement('div');
  carTop = document.createElement('div');
  carBody = document.createElement('div');
  lightFront = document.createElement('div');
  lightBack = document.createElement('div');
  wheelFront = document.createElement('div');
  wheelBack = document.createElement('div');
  hubCapFront = document.createElement('div');
  hubCapBack = document.createElement('div');

  render() {
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;

    this.car.classList.add('car');
    this.frame.append(this.car);

    // car top
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // car body
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // car lights
    this.lightFront.classList.add('light', 'light--front');
    this.lightBack.classList.add('light', 'light--back');
    this.lightFront.style.backgroundColor = 'blue';
    this.lightBack.style.backgroundColor = 'red';
    this.carBody.append(this.lightFront);
    this.carBody.append(this.lightBack);

    // car wheels
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelFront);
    this.carBody.append(this.wheelBack);

    // hub caps
    this.hubCapFront.classList.add('wheel__cap');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);
    this.wheelBack.append(this.hubCapBack);

    document.body.append(this.frame);
  }
}

let car = new Car(250, 8, 'orange');
car.render();

let wait = 1000;
for (let i = 0; i < 20; i++) {
  wait = wait + 1000;
  setTimeout(function () {
    if (i % 2 === 0) {
      car.lightFront.style.backgroundColor = 'blue';
      car.lightBack.style.backgroundColor = 'red';
    } else {
      car.lightFront.style.backgroundColor = 'red';
      car.lightBack.style.backgroundColor = 'blue';
    }
  }, wait);
}
