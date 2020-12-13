const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const controls = document.querySelector('.controls');
const form = document.forms[0]; // deprecated
const dinamicButton = document.getElementById('dinamic-button');
const clearButton = document.getElementById('clear');
let selectedBox = eval('box');

controls.addEventListener('click', (event) => {
  let target = event.target;
  let className = 'set-color';

  if (target.nodeName === 'BUTTON' && target.classList.contains(className)) {
    const color = target.style.backgroundColor;
    selectedBox.style.backgroundColor = color;
  }
});

form.addEventListener('submit', (e) => {
  // e.preventDefault();
  const input = form.querySelector('input');
  dinamicButton.style.backgroundColor = input.value;
  input.value = '';
});

function isColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

function regTest(colorCode) {
  var RegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  return RegExp.test(colorCode);
}

clearButton.addEventListener('click', () => {
  selectedBox.removeAttribute('style');
});

form
  .querySelector('input[type="color"]')
  .addEventListener('change', (event) => {
    const input = event.currentTarget;
    dinamicButton.style.backgroundColor = input.value;
  });

form.querySelector('input[type="text"]').addEventListener('change', (event) => {
  const input = event.currentTarget;
  if (isColor(input.value) || regTest(input.value)) {
    dinamicButton.style.backgroundColor = input.value;
  }
});

let radioElements = document.querySelectorAll('.radio');

[...radioElements].forEach((button) => {
  button.addEventListener('click', () => {
    selectedBox = eval(button.id);
  });
});
