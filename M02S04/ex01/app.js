const box = document.querySelector('.box');
const applyButton = document.getElementById('apply-button');
const applyButton2 = document.getElementById('apply-button2');
const applyButton3 = document.getElementById('apply-button3');
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
    applyButton.innerHTML = 'Aplica';
  } else {
    box.classList.add(className);
    applyButton.innerHTML = 'Elimina';
  }
});

box.addEventListener('transitionend', () => {
  console.log('animatia a luat sfarsit');
  if (box.classList.contains(className)) {
    applyButton.innerHTML = 'Elimina';
  } else {
    applyButton.innerHTML = 'Aplica';
  }
});

applyButton2.addEventListener('click', () => {
  box.classList.add(className);
  box.addEventListener('transitionend', () => {
    box.classList.toggle(className);
  });
});

applyButton3.addEventListener('click', () => {
  box.setAttribute('style', 'background-color: #000;');
});
