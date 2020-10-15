var dragos = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Steven',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.andra = andra;

// console.log(dragos);
// console.log(dragos.friends);

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
andra.friends.dragos = dragos;

// console.log(dragos.friends);

steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.steven = steven;

andra.friends.carol = carol;
carol.friends.andra = andra;

// Folosind keywordul delete sterge prietenia
// dintre Dragos si Larry (si invers).
delete dragos.friends.larry;
delete larry.friends.dragos;

// Folosind obiectul Carol afiseaza numele complet al lui Dragos.
console.log(
  `${carol.friends.andra.friends.dragos.name} ${carol.friends.andra.friends.dragos.surname}`,
);

// Folosind obiectul Anita afiseaza numarul total
// de caractere al numelui complet al lui Dragos.
console.log((andra.friends.dragos.name + andra.friends.dragos.surname).length);
