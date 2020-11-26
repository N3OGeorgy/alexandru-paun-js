const formId = 'personForm';

const createSkillUl = () => {
  const ulId = 'skills-list';
  let $ul = $(`#${ulId}`);
  if ($ul.length !== 1) {
    $ul = $('<ul>', { id: ulId });
    $(`#${formId}`).after($ul);
    $ul.on('click', 'button', (event) => {
      const $element = $(event.currentTarget);
      $element.parent().remove();
    });
  }
  return $ul;
};

const createPersonDetails = () => {
  const detailsId = 'person-details';
  let $p = $(`#${detailsId}`);

  if ($p.length < 1) {
    $p = $('<p>', {
      id: detailsId,
    });

    $(`#${formId}`).after($p);
  }

  return $p;
};

$(document).ready(() => {
  console.log('asd');
  let $skillInput = $('#skills');
  $skillInput.next().on('click', () => {
    console.log('asd2');
    const value = $skillInput.val();
    const $skillsUl = createSkillUl();
    const $skillLi = $('<li>', {
      text: value,
    })
      .append(
        $('<button>', {
          text: '-',
        }),
      )
      .append(
        $('<button>', {
          text: 'Edit',
        }),
      );
    $skillsUl.append($skillLi);
    $skillInput.val('');
  });

  $(`#${formId}`).on('submit', function (event) {
    let $form = $(this);
    const data = $form.serializeArray();
    const desiredKeys = ['name', 'surname', 'age'];

    const userData = data.filter((key) => {
      if (desiredKeys.includes(key.name)) {
        return true;
      } else {
        return false;
      }
    });

    $personDetails = createPersonDetails();
    let message = `Numele meu este ${userData[0].value} ${userData[1].value} si am ${userData[2].value} ani.`;
    $personDetails.text(message);

    event.preventDefault();
  });
});
