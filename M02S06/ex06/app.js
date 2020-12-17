$(() => {
  const buildPersonList = () => {
    const ulClass = 'person-list';
    const ajaxResponse = '';

    $.ajax('http://localhost:8080/persons', {
      method: 'GET',
    }).done((response) => {
      let $ul = $(`.${ulClass}`);

      if ($ul.length === 0) {
        $ul = $('<ul>', {
          class: ulClass,
        });
      }

      response.persons.forEach((person) => {
        const $li = $('<li>', {
          text: person.name,
        });
        $ul.append($li);
      });

      $ul.appendTo('body');
    });
  };

  buildPersonList();

  (async function () {
    let response = await $.ajax('http://localhost:8080/persons', {
      method: 'GET',
    });

    let githubReponse = await fetch('https://api.github.com/users/DragoshDX', {
      method: 'GET',
    });

    let res = await githubReponse.json();

    console.log(res);
  })();

  /*
  https://javascript.info/promise-chaining
  https://javascript.info/async-await
  */
});
