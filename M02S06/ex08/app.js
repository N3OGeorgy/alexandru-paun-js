axios.interceptors.request.use(
  (config) => {
    const { url, method, data } = config;
    if (url.includes('/persons') && method === 'post') {
      data.person.name = data.person.name.toUpperCase();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

$(() => {
  const buildPersonList = () => {
    const ulClass = 'person-list';

    axios.get('http://localhost:8080/persons').then((axiosResponse) => {
      let response = axiosResponse.data;
      let $ul = $(`.${ulClass}`);

      if ($ul.length === 0) {
        $ul = $('<ul>', {
          class: ulClass,
        });
      }

      $ul.empty();

      response.persons.forEach((person) => {
        const $li = $('<li>', {
          text: person.name,
        });

        const $skillsUl = $('<ul>');

        person.skills.forEach((skill) => {
          $('<li>', {
            text: skill,
          }).appendTo($skillsUl);
        });

        $li.append($skillsUl);

        $ul.append($li);
      });

      $ul.appendTo('body');
    });
  };

  buildPersonList();

  const $form = $('#personForm');
  let requestBody = {
    person: {
      name: '',
      skills: [],
    },
  };

  $form
    .on('click', '.addSkill', (event) => {
      const $delegateTarget = $(event.currentTarget);
      const $buttonParent = $delegateTarget.parent(); // parentElement <- DOM
      const skillValue = $delegateTarget.prev().val();

      if (skillValue.length < 1) {
        return;
      }

      requestBody.person.skills.push(skillValue);

      let $skillsUl = $('.skillsUl');
      let $skillLi = $('<li>', {
        text: skillValue,
      });

      if ($skillsUl.length < 1) {
        $skillsUl = $('<ul>', {
          class: 'skillsUl',
        });

        $skillsUl.append($skillLi).appendTo($buttonParent);
      } else {
        $skillsUl.append($skillLi);
      }

      $delegateTarget.prev().val('');
    })
    .on('submit', (event) => {
      event.preventDefault();
      const $nameInput = $(event.target).find('input[name="name"]');
      requestBody.person.name = $nameInput.val();

      axios.post('http://localhost:8080/persons', requestBody).then(() => {
        $nameInput.val('');
        $('.skillsUl').empty();

        requestBody = {
          person: {
            name: '',
            skills: [],
          },
        };

        buildPersonList();
      });
    });

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
