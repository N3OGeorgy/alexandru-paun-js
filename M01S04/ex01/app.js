var messageParagraph = document.getElementById('message');
var value = window.prompt('Introdu o valoare:');
// var isOdd = false;

// if (value % 2 === 0) {
//   isOdd = false;
// } else {
//   isOdd = true;
// }

// // ternary operator
// var word = isOdd === true ? 'impara' : 'para';

// console.log(`Valoarea este ${value} si este ${word}.`);
var word = 'para';

if (value % 2 === 0) {
  word = 'para';
} else {
  word = 'impara';
}

var message = `Valoarea este ${value} si este ${word}`;
messageParagraph.innerText = message;
// messageParagraph.textContent = message;
