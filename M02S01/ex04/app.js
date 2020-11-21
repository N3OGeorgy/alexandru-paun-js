class Car {
  constructor(
    left = 210,
    top = 8,
    color,
    wheelColor = 'black',
    capColor = 'green',
    areHazardsOn = false,
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.wheelColor = wheelColor;
    this.capColor = capColor;
    this.areHazardsOn = areHazardsOn;
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
  self = this;

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
    // this.lightFront.style.backgroundColor = 'yellow';
    // this.lightBack.style.backgroundColor = 'white';
    this.carBody.append(this.lightFront);
    this.carBody.append(this.lightBack);

    // car wheels
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelFront);
    this.carBody.append(this.wheelBack);

    // car hubcaps
    this.hubCapFront.classList.add('wheel__cap');
    this.hubCapBack.classList.add('wheel__cap');
    this.hubCapFront.style.backgroundColor = this.capColor;
    this.hubCapBack.style.backgroundColor = this.capColor;
    this.wheelFront.append(this.hubCapFront);
    this.wheelBack.append(this.hubCapBack);

    document.body.append(this.frame);
  }

  startPewPew() {
    let wait = 1000;
    let self = this;
    for (let i = 0; i < 5; i++) {
      wait = wait + 1000;
      setTimeout(function () {
        if (i % 2 === 0) {
          self.lightFront.style.backgroundColor = 'blue';
          self.lightBack.style.backgroundColor = 'red';
        } else {
          self.lightFront.style.backgroundColor = 'red';
          self.lightBack.style.backgroundColor = 'blue';
        }
      }, wait);
    }

    setTimeout(
      function () {
        this.lightFront.style.backgroundColor = '';
        this.lightBack.style.backgroundColor = '';
      }.bind(this),
      wait + 1000,
    );
  }

  frontLightsOn() {
    this.lightFront.classList.add('light--on');
  }

  frontLightsOff() {
    this.lightFront.classList.remove('light--on');
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--on');
  }

  toggleHazards() {
    setInterval(() => {
      if (this.areHazardsOn) {
        this.areHazardsOn = false;
        this.lightFront.classList.remove('light--on');
        this.lightBack.classList.remove('light--on');
      } else {
        this.areHazardsOn = true;
        this.lightBack.classList.add('light--on');
        this.lightFront.classList.add('light--on');
      }
    }, 1000);
  }
}

let car = new Car(250, 8, 'orange');
car.render();
