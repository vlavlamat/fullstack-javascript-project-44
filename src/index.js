import readlineSync from 'readline-sync';

// The function greeting player and declare rules
function greetingAndRules(rule) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  return userName;
}

// The question and answer function
function questionAndAnswer(firstNumber, secondNumber, operator) {
  if (secondNumber === undefined && operator === undefined) {
    console.log(`Question: ${firstNumber}`);
    return String(readlineSync.question('Your answer: '));
  }
  console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
  return String(readlineSync.question('Your answer: '));
}

// The function returns random number in a range
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

// 06. Calculate the correct result
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

export {
  getRandomNumber,
  greetingAndRules,
  evenOrNot,
  getOperatorSymbol,
  questionAndAnswer,
  getCorrectResult,
};
