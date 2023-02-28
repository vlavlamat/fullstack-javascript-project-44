import readlineSync from 'readline-sync';

// Function greeting player and declare rules for all steps
function greetingAndRules(rule) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  return userName;
}

// The question and answer function for all steps
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

// Function returns random number in a range for all steps
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function checking if a number is odd or even for step 5
function evenOrNot(numberForCheck) {
  let evenOrOdd;
  if (numberForCheck % 2 === 0) {
    evenOrOdd = 'yes';
  } else if (numberForCheck % 2 !== 0) {
    evenOrOdd = 'no';
  }
  return evenOrOdd;
}

// Function select a random operator among '+', '-', '*' for step 6
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

// Function calculating the correct result for step 6
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

// Function searching for great common divisor
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
// function getGreatCommonDivisor(firstNumber, secondNumber) {
//   let result;
//   let divisor;
//   if (firstNumber === 1 && secondNumber === 1) {
//     return String(1);
//   }
//   if (firstNumber < secondNumber) {
//     if (secondNumber % firstNumber === 0) {
//       return String(firstNumber);
//     }
//     divisor = Math.floor(firstNumber / 2);
//     while (divisor >= 1) {
//       if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
//         result = divisor;
//         break;
//       }
//       divisor -= 1;
//     }
//   }
//   if (firstNumber > secondNumber) {
//     if (firstNumber % secondNumber === 0) {
//       return String(secondNumber);
//     }
//     divisor = Math.floor(secondNumber / 2);
//     while (divisor >= 1) {
//       if (secondNumber % divisor === 0 && firstNumber % divisor === 0) {
//         result = divisor;
//         break;
//       }
//       divisor -= 1;
//     }
//   }
//   return String(result);
// }

export {
  getRandomNumber,
  greetingAndRules,
  evenOrNot,
  getOperatorSymbol,
  questionAndAnswer,
  calculateResult,
  getGreatCommonDivisor,
};
