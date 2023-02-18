import readlineSync from 'readline-sync';

// 01. Greeting:

console.log('Welcome to the Brain Games!');

// 02. Get acquainted:

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// 03. Game rules:

console.log('What is the result of the expression?');

// 04. Get a random numbers:

const minRangeNumber = 1;
const maxRangeNumber = 25;
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 05. Get an operator symbol:

function getOperatorSymbol() {
  const minRange = 1;
  const maxRange = 2;
  const currentOperator = getRandomNumber(minRange, maxRange);
  switch (currentOperator) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
}

// 06. Getting the correct result:

function getCorrectResult(firstOperand, secondOperand, operator) {
  let result;
  if (operator === '+') {
    result = firstOperand + secondOperand;
  } else if (operator === '-') {
    result = firstOperand - secondOperand;
  } else {
    result = firstOperand * secondOperand;
  }
  return String(result);
}

// 07. Let's calculate:

function letsCalculate() {
  let firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
  let secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
  let operator = getOperatorSymbol();
  let correctResult = getCorrectResult(firstNumber, secondNumber, operator);
  console.log(typeof correctResult);
  console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
  let answer = String(readlineSync.question('Your answer: '));
  console.log(typeof answer);
  if (answer === correctResult) {
    console.log('Correct!');
    let i = 0;
    while (i < 2) {
      firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
      secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
      operator = getOperatorSymbol();
      correctResult = getCorrectResult(firstNumber, secondNumber, operator);
      console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
      answer = Number(readlineSync.question('Your answer: '));
      i += 1;
      console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${userName}!`);
  }
}

letsCalculate();
