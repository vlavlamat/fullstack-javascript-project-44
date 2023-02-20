import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

function getGameRules(rules) {
  console.log(rules);
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function gameCycle(firstNumber = null, secondNumber = null, operator = null) {
//   const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
//   console.log(question);
//   const answer = String(readlineSync.question('Your answer: '));
//   return `${question}\n${answer}`;
// }

// const text = 'What is the result of the expression?';

export { getRandomNumber, greeting, getGameRules };
