// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara',
  class: 'clase de css',
});
$p.css({
  fontSize: '22px',
});
// $p.appendTo($('body'));

let $body = $('body');
$body.append($p);

$p1 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 chr',
});

$body.append($p1);
setTimeout(() => {
  $p1.addClass('error');
}, 5000);
