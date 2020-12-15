// // ^ undeva mai sus este pristine
// let lookbookPage = document.querySelector('.monochrome-lookbook');

// if (lookbookPage !== null) {
//   const formClass = 'form-lookbook';
//   const form = document.querySelector(`.${formClass}`);
//   let pristine = null;

//   if (form !== null) {
//     pristine = new Pristine(form);

//     form.addEventListener('submit', (event) => {
//       event.preventDefault();

//       pristine.validate();
//     });
//   }
// }

$(() => {
  let $page = $('.monochrome-lookbook');

  if ($page.length > 0) {
    const $form = $('.form-lookbook');

    if ($form.length > 0) {
      $form.validate();
    }
  }
});
