import readlineSync from 'readline-sync';

// The function greeting player
function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

// The function explains game's rules
function getGameRules(rules) {
  console.log(rules);
}

// The function returns random number in range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The function check if a number is odd or even
function evenOrNot(numberForCheck) {
  let evenOrOdd;
  if (numberForCheck % 2 === 0) {
    evenOrOdd = 'yes';
  } else if (numberForCheck % 2 !== 0) {
    evenOrOdd = 'no';
  }
  return evenOrOdd;
}

// The function select a random operator among '+', '-', '*'
function getOperatorSymbol() {
  const operator = Math.floor(Math.random() * 2) + 1;
  switch (operator) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
}

// function gameCycle(firstNumber = null, secondNumber = null, operator = null) {
//   const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
//   console.log(question);
//   const answer = String(readlineSync.question('Your answer: '));
//   return `${question}\n${answer}`;
// }

export {
  getRandomNumber,
  greeting,
  getGameRules,
  evenOrNot,
  getOperatorSymbol,
};
