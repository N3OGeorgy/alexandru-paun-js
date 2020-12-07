const img = document.querySelector('.image');
const paragraph = img.parentElement;

const messageContainer = document.createElement('span');
messageContainer.innerText = 'imaginea se incarca';
paragraph.append(messageContainer);

img.addEventListener('load', () => {
  setTimeout(() => {
    messageContainer.innerText = 'imaginea s-a incarcat';
  }, 1000);
  img.addEventListener('click', () => {
    alert(`Imaginea cu URL-ul: ${img.src} s-a incarcat`);
  });
});

const $img2 = $('.image2');
const $paragraph2 = $img2.parent();

const $messageContainer2 = $('<div>', {
  text: 'imaginea se incarca2',
});
$paragraph2.append($messageContainer2);
$img2
  .on('load', () => {
    setTimeout(() => {
      $messageContainer2.text('imaginea s-a incarcat');
    }, 1000);
  })
  .on('click', () => {
    alert(`Imaginea cu URL-ul: ${img.src} s-a incarcat`);
  });
