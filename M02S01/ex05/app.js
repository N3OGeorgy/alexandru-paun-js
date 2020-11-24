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
  htmlContainer = document.createElement('div');

  setPosX(x) {
    this.posX = x;
    this.htmlContainer.style.left = `${x}px`;
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

  render() {
    const cssText = `
    left: ${this.posX}px;
    top: ${this.posY}px;
    width: ${this.width}px;
    height: ${this.height}px;
    background-color: ${this.color};
    border: 1px solid ${this.borderColor};
    `;

    this.htmlContainer.style.cssText = cssText;
    this.htmlContainer.classList.add('shape');

    document.body.append(this.htmlContainer);
  }
}

class Rectangle extends Shape {
  constructor(posX, posY, width, height, color, borderColor) {
    super(posX, posY, width, height, color, borderColor);
    this.htmlContainer.classList.add('shape--rectangle');
  }
}

class Circle extends Shape {
  constructor(posX, posY, radius, color, borderColor) {
    super(posX, posY, radius * 2, radius * 2, color, borderColor);

    this.borderRadius = this.setBorderRadius(radius);
    this.htmlContainer.classList.add('shape--circle');
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

// let shape = new Shape();
// shape.renderFromClass();

// let circle = new Circle();
// circle.renderFromClass();

let rectangle = new Rectangle(200, 10, 100, 100, 'black', 'red');
rectangle.render();

let circle2 = new Circle(350, 10, 15, 'black', 'red');
circle2.render();
