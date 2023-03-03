import readlineSync from 'readline-sync';

// Function greets player and declares rules
function greetingAndRules(rule) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  return userName;
}

// The question and answer function
function questionAndAnswer(firstValue, secondValue, thirdValue) {
  if (secondValue === undefined && thirdValue === undefined) {
    console.log(`Question: ${firstValue}`);
    return String(readlineSync.question('Your answer: '));
  }
  if (thirdValue === undefined) {
    console.log(`Question: ${firstValue} ${secondValue}`);
    return String(readlineSync.question('Your answer: '));
  }
  console.log(`Question: ${firstValue} ${thirdValue} ${secondValue}`);
  return String(readlineSync.question('Your answer: '));
}

// Function returns random number in a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function checks if a number is odd or even
function evenOrNot(numberForCheck) {
  let evenOrOdd;
  if (numberForCheck % 2 === 0) {
    evenOrOdd = 'yes';
  } else if (numberForCheck % 2 !== 0) {
    evenOrOdd = 'no';
  }
  return evenOrOdd;
}

// Function selects a random operator among '+', '-', '*' for calculator
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

// Function calculates the correct result for calculator
function calculateResult(firstOperand, secondOperand, operator) {
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

// Function searches for great common divisor
function getGreatCommonDivisor(firstNumber, secondNumber) {
  let result;
  for (let divider = firstNumber; divider >= 1; divider -= 1) {
    if (firstNumber % divider === 0 && secondNumber % divider === 0) {
      result = String(divider);
      break;
    }
  }
  return result;
}

// Function returns a random progression in array
function randomProgression(start, step) {
  const lengthProgression = 9;
  const progression = [start];
  let currentNumber = start;
  let count = 1;
  while (count <= lengthProgression) {
    currentNumber += step;
    progression.push(currentNumber);
    count += 1;
  }
  return progression;
}

// Function checks if a number is prime or not
function primeOrNot(number) {
  if (number === 1) {
    return 'no';
  }
  let divider = Math.round(number / 2);
  while (divider > 1) {
    if (number % divider === 0) {
      return 'no';
    }
    divider -= 1;
  }
  return 'yes';
}

export {
  getRandomNumber,
  greetingAndRules,
  evenOrNot,
  getOperatorSymbol,
  questionAndAnswer,
  calculateResult,
  getGreatCommonDivisor,
  randomProgression,
  primeOrNot,
};
