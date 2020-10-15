var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
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

console.log(person.friends.larry);
console.log(person.skills.javaScript);
// Afiseaza varsta prietenei Carol
console.log(person.friends.carol.age);

// Folosind anul curent calculeaza si afiseaza
// anul de nastere al lui Larry
console.log(2020 - person.friends.larry.age);

// Calculeaza diferenta si afiseaza propozitia:
// “Steven este cu xx ani mai mare decat Larry.”
// folosind proprietatile name
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

// Afiseaza propozitia: “Prietenul meu Steven Stevenson are xx ani”
// folosind doar proprietatile
console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani.',
);

// Afiseaza propozitia: “Prietenii mei sunt: Steven, Carol si Larry.
// interpolare
console.log(
  `Prietenii mei sunt: ${person.friends.steven.name}, ${person.friends.carol.name} si ${person.friends.larry.name}.`,
);

// Afiseaza numarul de caractere al numelui de familie al lui Steven
console.log(person.friends.steven.surname.length);
