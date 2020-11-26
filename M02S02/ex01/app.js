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
  text: 'Parola nu trebuie sa fie mai mica de 5 chr.',
});

$body.append($p1);
setTimeout(() => {
  $p1.addClass('error');
}, 5000);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
// https://api.jquery.com/text/
// Creeaza un element de tip span cu idul example si cu textul “ParolaMea” si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

// js
document.getElementById('myParagraph').innerText = 'Am schimbat 1';
// jquery
$('#myParagraph').text('Am schimbat 2');

$('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p1);

let span = document.createElement('span');
span.id = 'example2';
span.innerText = 'Parola Ta';
$p1[0].append(span);

$('<h2>', {
  text: 'Mesaje',
}).prependTo('.container');

let h2 = document.createElement('h2');
h2.innerText = 'Message 2';
document.querySelector('.container').prepend(h2);
