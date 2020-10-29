let dateBuilder = [
  () => {
    return '2019';
  },
  () => {
    return 'Februarie';
  },
  () => {
    return '24';
  },
];

dateBuilder[3] = () => {
  return 'Duminica';
};

console.warn(`
  Folosind arrayul dateBuilder. Afiseaza luna curenta.
`);
console.log(dateBuilder[1]());
