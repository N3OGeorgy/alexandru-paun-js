const box = document.querySelector('.box');
const applyButton = document.getElementById('apply-button');
const className = 'animate-class';

setTimeout(() => {
  box.classList.add(className);
  setTimeout(() => {
    box.classList.remove(className);
  }, 1000 * 2);
}, 1000 * 2);

applyButton.addEventListener('click', () => {
  if (box.classList.contains(className)) {
    box.classList.remove(className);
  } else {
    box.classList.add(className);
  }
});

box.addEventListener('transitionend', () => {
  console.log('animatia a luat sfarsit');
});
