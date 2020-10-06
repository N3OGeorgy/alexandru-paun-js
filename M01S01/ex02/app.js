var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var result = 0;

    result = length * width;

    elementResult.innerText = result;

    e.preventDefault();
  },
  false,
);
