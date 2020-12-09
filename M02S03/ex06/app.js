const message = 'Butonul a fost apasat';

const clickHandler = (event) => {
  const width = window.innerWidth;
  let targetArticle = null;

  if (width < 650) {
    targetArticle = document.querySelector('.lo-res');
  } else if (width >= 650 && width < 1000) {
    targetArticle = document.querySelector('.mid-res');
  } else {
    targetArticle = document.querySelector('.high-res');
  }

  const span = document.createElement('span');
  span.innerText = message;
  targetArticle.append(span);
};

document.querySelector('.btn').addEventListener('click', clickHandler);

const messageJS = 'Butonul JS a fost apasat';
$('.btn2').on('click', () => {
  let $width = $(window).width();
  let $targetArticle = null;

  if ($width < 650) {
    $targetArticle = $('.lo-res');
  } else if ($width >= 650 && $width < 1000) {
    $targetArticle = $('.mid-res');
  } else {
    $targetArticle = $('.high-res');
  }

  $targetArticle.append(
    $('<span>', {
      text: messageJS,
    }),
  );
});
