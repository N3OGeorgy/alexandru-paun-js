function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();

  console.log(
    `${hours}:${minutes}:${seconds}:${milliseconds}, am ajuns la Pixellab.`,
  );
}

// console.log(
//   `
//   ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}
// `,
//   'Am ajuns la Pixellab',
// );
// console.log(getTime());

setInterval(getTime, 1000);
