// const h1 = document.getElementsByTagName('h1')[0];
// const ul = document.getElementsByTagName('ul')[0];
// const breakPoint = 500;

// const clickHandler = () => {
//   const displayValue = getComputedStyle(ul).display;
//   if (displayValue === 'block') {
//     ul.style.display = 'none';
//   }

//   if (displayValue === 'none') {
//     ul.style.display = 'block';
//   }
// };

// h1.addEventListener('click', clickHandler);

// document.addEventListener('DOMContentLoaded', () => {
//   const width = window.innerWidth;

//   if (width <= breakPoint) {
//     h1.addEventListener('click', clickHandler);
//     ul.style.display = 'none';
//   } else {
//     h1.removeEventListener('click', clickHandler);
//     ul.style.display = 'block';
//   }
// });

// window.addEventListener('resize', () => {
//   const width = window.innerWidth;

//   if (width <= breakPoint) {
//     h1.addEventListener('click', clickHandler);
//     ul.style.display = 'none';
//   } else {
//     h1.removeEventListener('click', clickHandler);
//     ul.style.display = 'block';
//   }
// });

const $h1 = $('h1');
const $ul = $('ul');
const breakPoint = 500;

const clickHandler = () => {
  const displayValue = $ul.css('display');
  if (displayValue === 'block') {
    $ul.css('display', 'none');
  }

  if (displayValue === 'none') {
    $ul.css('display', 'block');
  }
};

$h1.on('click', clickHandler);

$(document).ready(function () {
  if ($(window).width() <= breakPoint) {
    $h1.off('click', clickHandler);
    $h1.on('click', clickHandler);
    $ul.css('display', 'none');
  } else {
    $h1.off('click', clickHandler);
    $ul.css('display', 'block');
  }
});

$(window).on('resize', function () {
  if (this.innerWidth <= breakPoint) {
    $h1.off('click', clickHandler);
    $h1.on('click', clickHandler);
    $ul.css('display', 'none');
  } else {
    $h1.off('click', clickHandler);
    $ul.css('display', 'block');
  }
});
