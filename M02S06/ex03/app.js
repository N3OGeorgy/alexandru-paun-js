const fileSistem = require('fs');
const fileData = fileSistem.readFileSync('./file.txt', 'utf-8');

console.log(`${fileData.trim()} bla bla`);
