const p = document.getElementById('dimensions');
window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  p.innerText = width + '+' + height;
  // alert('fereastra si-a schimbat dimensiunea');
});
