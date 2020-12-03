const message = 'btn a fost apasat.';
const breakPoint = 650;
const button = document.querySelector('.btn');

const clickHandler = () => {
  console.log(message);
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
