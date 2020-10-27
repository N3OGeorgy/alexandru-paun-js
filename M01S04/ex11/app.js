let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    node: false,
    react: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`
  Folosind Object.keys() pe proprietatea skills,
  afiseaza abilitatile persoanei daca acestea sunt true.
`);
Object.keys(person.skills).forEach((skill) => {
  if (person.skills[skill] === true) {
    console.log(skill);
  }
});

console.warn(`
  Prin aceeasi metoda, afiseaza o lista
  inversata cu numele complet al prietenilor.
`);
Object.keys(person.friends)
  .reverse()
  .forEach((friend) => {
    let friendObject = person.friends[friend];

    console.log(`${friendObject.name} ${friendObject.surname}`);
  });

console.warn(`
  Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.”
  folosind Object.keys()
`);
let friendsKeysArray = Object.keys(person.friends);
let sentence = 'Prietenii mei sunt ';
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let punctuation = ', ';

  if (i === friendsKeysArray.length - 1) {
    punctuation = '.';
  }

  if (i === friendsKeysArray.length - 2) {
    punctuation = ' si ';
  }

  sentence += `${friendObject.name}${punctuation}`;
  // sentence = sentence +
  // sentence = `${sentence} ...`
}
console.log(sentence);

console.warn(`
  Folosind bucla, afiseaza mai multe propozitii
  (cate una per console.log()) care sa afiseze:
  “Larry este mai mare|mic decat Dragos.” etc…
`);
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let sentenceFragment =
    friendObject.age - person.age >= 0 ? 'mai mare' : 'mai mic';

  console.log(
    `${friendObject.name} este ${sentenceFragment} decat ${person.name}`,
  );
}
