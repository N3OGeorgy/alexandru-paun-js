let lookbookPage = document.querySelector('.monochrome-lookbook');

if (lookbookPage !== null) {
  const formClass = 'form-lookbook';
  const form = document.querySelector(`.${formClass}`);
  let pristine = null;

  if (form !== null) {
    pristine = new Pristine(form);
  }
}
