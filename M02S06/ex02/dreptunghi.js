const validateInput = (arr) => {
  if (arr.length < 4) {
    return 'Nu am primit toti parametrii';
  }

  if (isNaN(arr[2]) || isNaN(arr[3])) {
    return 'Parametrii nu sunt corecti';
  }

  return true;
};

const validationResult = validateInput(process.argv);

if (validationResult !== true) {
  console.log(validationResult);
  process.exit();
}

// [executabil node, adresa script, lungime, latime]
const [nodePath, scriptPath, width, length] = process.argv;

console.log(`Suprafata este: ${width * length}.`);
