const p = document.getElementById('dimensions');
const p2 = document.getElementById('dimensions2');

function showMe() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  p2.innerText = `Suprafata este de ${width * height} pixeli.`;
}

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  p.innerText = `Fereastra are acum suprafata de ${width * height} pixeli.`;
  // alert('fereastra si-a schimbat dimensiunea');
});

window.addEventListener('DOMContentLoaded', () => {
  showMe();
});

const $pjs = $('#dimensionsjs');
const $pjs2 = $('#dimensionsjs2');

function showMe2() {
  let width = $(window).width();
  let height = $(window).height();
  $pjs2.text(`Suprafata este de ${width * height} pixeli.`);
}

$().ready(function () {
  showMe2();
});

$(window).resize(function () {
  let width = $(window).width();
  let height = $(window).height();
  $pjs.text(`Fereastra are acum suprafata de ${width * height} pixeli.`);
});
