const createTextCaptureInput = (placeholder = 'Adauga o valoare') => {
  const $widget = $('<div>', {
    class: 'text-widget',
  });

  $widget
    .append(
      $('<input>', {
        type: 'text',
        placeholder,
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        text: 'Salveaza',
        class: 'save',
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        text: 'Renunta',
        class: 'cancel',
      }),
    );

  return $widget;
};

const formId = 'personForm';

const createSkillUl = () => {
  const ulId = 'skills-list';
  let $ul = $(`#${ulId}`);
  let editMode = false;

  if ($ul.length !== 1) {
    $ul = $('<ul>', { id: ulId });
    $(`#${formId}`).after($ul);
    $ul.on('click', '.delete', (event) => {
      const $element = $(event.currentTarget);
      editMode = false;
      $element.parent().remove();
    });

    $ul.on('click', '.edit', (event) => {
      if (editMode === true) {
        return;
      }
      editMode = true;
      const $element = $(event.currentTarget);
      const $parentLi = $element.parent();
      const $widget = createTextCaptureInput('Edit skill');

      $parentLi.prepend($widget);
    });

    $ul.on('click', '.text-widget .cancel', (event) => {
      editMode = false;
      // nu asa:
      // $(.text-widget).remove();
      $(event.currentTarget).parent().remove();
    });

    $ul.on('click', '.text-widget .save', function () {
      $saveButton = $(this);
      let value = $saveButton.prev().val();
      let $parentLi = $saveButton.parents('li');
      $parentLi.find('.skill-text').text(value);
      editMode = false;
      $saveButton.parent().remove();
    });
  }
  return $ul;
};

const createCreatureDetails = (detailsId) => {
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
    const $skillLi = $('<li>')
      .append(
        $('<span>', {
          class: 'skill-text',
          text: value,
        }),
      )
      .append(
        $('<button>', {
          text: '-',
          class: 'delete',
        }),
      )
      .append(
        $('<button>', {
          text: 'Edit',
          class: 'edit',
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

    $personDetails = createCreatureDetails('person-details');
    let message = `Numele meu este ${userData[0].value} ${userData[1].value} si am ${userData[2].value} ani.`;
    $personDetails.text(message);

    event.preventDefault();
  });

  $('#pet-checkbox').on('change', function () {
    const checked = $(this).is(':checked');
    const $petFieldset = $(this).parent().next();
    console.log($petFieldset);
    if (checked === true) {
      $petFieldset.slideDown();
    } else {
      $petFieldset.slideUp();
    }
  });

  $('#add-pet').on('click', () => {
    $form = $(`#${formId}`);
    const data = $form.serializeArray();
    const desiredKeys = ['pet-name', 'pet-species', 'pet-age'];

    const petData = data.filter((key) => {
      if (desiredKeys.includes(key.name)) {
        return true;
      } else {
        return false;
      }
    });

    $petDetails = createCreatureDetails('pet-details');
    let message = `Animalul se numeste ${petData[0].value} este ${petData[1].value} si are ${petData[2].value} ani.`;
    $petDetails.text(message);
  });
});
