const createFriendUl = () => {
  const ulId = 'friends-list';
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
      const $widget = createFriendCaptureInput();

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
      let friendSurnameValue = $saveButton.prev().prev().prev().val();
      let friendFirstnameValue = $saveButton.prev().prev().val();
      let friendAgeValue = $saveButton.prev().val();
      console.log(friendSurnameValue);
      console.log(friendFirstnameValue);
      console.log(friendAgeValue);
      let $parentLi = $saveButton.parents('li');
      $parentLi.find('.friend-surname').text(friendSurnameValue);
      $parentLi.find('.friend-firstname').text(friendFirstnameValue);
      $parentLi.find('.friend-age').text(friendAgeValue);
      editMode = false;
      $saveButton.parent().remove();
    });
  }
  return $ul;
};

const createFriendCaptureInput = () => {
  const $widget = $('<div>', {
    class: 'text-widget',
  });

  $widget
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Friend Surname',
      }),
    )
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Friend Firstname',
      }),
    )
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Friend Age',
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

$(document).ready(() => {
  let $addFriend = $('#addfriend');

  $addFriend.on('click', () => {
    let $friendSurname = $('#friendsurname');
    let $friendFirstname = $('#friendfirstname');
    let $friendAge = $('#friendage');

    const $firendsUl = createFriendUl();
    const $friendLi = $('<li>')
      .append(
        $('<span>', {
          class: 'friend-surname',
          text: $friendSurname.val(),
        }),
      )
      .append($('<br>'))
      .append(
        $('<span>', {
          class: 'friend-firstname',
          text: $friendFirstname.val(),
        }),
      )
      .append($('<br>'))
      .append(
        $('<span>', {
          class: 'friend-age',
          text: $friendAge.val(),
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
    $firendsUl.append($friendLi);
    $friendSurname.val('');
    $friendFirstname.val('');
    $friendAge.val('');
  });
});
