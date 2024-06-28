const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
rl.question("What's your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
*/

function whatsYourSign() {
  rl.question("Enter a number ", (num) => {
    if (num > 0) {
      console.log(`${num} is a postive number.`);
    } else if (num < 0) {
      console.log(`${num} is a negative number.`);
    } else {
      console.log(`${num} is neither positive nor negative number.`);
    }
    rl.close();
  });
}
whatsYourSign();
