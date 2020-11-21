class Shape {
  constructor(posX, posY, width, height, color, borderColor) {
    this.posX = posX;
    this.posY = posY;
    this.height = height;
    this.width = width;
    this.color = color;
    this.borderColor = borderColor;
  }

  shape = document.createElement('div');

  setPosX(x) {
    this.posX = x;
  }

  setPosY(y) {
    this.posY = y;
  }

  setWidth(w) {
    this.width = w;
  }

  setHeight(h) {
    this.height = h;
  }

  setColor(c) {
    this.color = c;
  }

  setBorderColor(bc) {
    this.borderColor = bc;
  }

  renderFromClass() {
    this.shape.classList.add('shape');
    this.shape.style.margin = '20px';
    this.shape.classList.add('shape--rectangle');

    document.body.append(this.shape);
  }
}

class Rectangle extends Shape {}

class Circle extends Shape {
  constructor(posX, posY, radius, color, borderColor) {
    super(posX, posY, radius, radius, color, borderColor);

    this.borderRadius = this.setBorderRadius(radius);
  }

  circle = document.createElement('div');

  setBorderRadius(br) {
    return br;
  }

  renderFromClass() {
    this.circle.classList.add('shape');
    this.circle.style.top = '200px';
    this.circle.classList.add('shape--circle');

    document.body.append(this.circle);
  }
}

let shape = new Shape();
shape.renderFromClass();

let circle = new Circle();
circle.renderFromClass();
