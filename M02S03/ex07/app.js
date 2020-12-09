const message = 'btn a fost apasat.';
const breakPoint = 650;
const button = document.querySelector('.btn');

const clickHandler = () => {
  console.log(message);
  alert(message);
};
button.addEventListener('click', clickHandler);

window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (width <= breakPoint) {
    button.removeEventListener('click', clickHandler);
  } else {
    button.addEventListener('click', clickHandler);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;

  if (width <= breakPoint) {
    button.removeEventListener('click', clickHandler);
  } else {
    button.addEventListener('click', clickHandler);
  }
});

const $buttonJ = $('.btn2');

$(window).on('resize', function () {
  if (this.innerWidth <= breakPoint) {
    $buttonJ.off('click', clickHandler);
  } else {
    $buttonJ.off('click', clickHandler);
    $buttonJ.on('click', clickHandler);
  }
});

$(document).ready(function () {
  if ($(window).width() <= breakPoint) {
    $buttonJ.off('click', clickHandler);
  } else {
    $buttonJ.off('click', clickHandler);
    $buttonJ.on('click', clickHandler);
  }
});
