const fileSistem = require('fs');
const text = 'Invat node.js!';

if (!fileSistem.existsSync('./my-file.txt')) {
  fileSistem.writeFileSync('./my-file.txt', text);
}
