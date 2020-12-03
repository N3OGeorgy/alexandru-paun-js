const img = document.querySelector('.image');
const paragraph = img.parentElement;

img.addEventListener('load', () => {
  const messageContainer = document.createElement('span');
  messageContainer.innerText = 'imaginea s-a incarcat';
  paragraph.append(messageContainer);
});
