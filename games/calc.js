// import readlineSync from 'readline-sync';
import { greeting, getGameRules, getOperatorSymbol } from '../src/index.js';

// 01. Greeting:

greeting();

// 02. Game rules:
const gameRules = 'What is the result of the expression?';
getGameRules(gameRules);

// const minRangeNumber = 1;
// const maxRangeNumber = 25;

// // 06. Getting the correct result:
//
// function getCorrectResult(firstOperand, secondOperand, operator) {
//   let result;
//   if (operator === '+') {
//     result = firstOperand + secondOperand;
//   } else if (operator === '-') {
//     result = firstOperand - secondOperand;
//   } else {
//     result = firstOperand * secondOperand;
//   }
//   return String(result);
// }
//
// // 07. Let's calculate:
//
// function letsCalculate() {
//   let firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
//   let secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
//   let operator = getOperatorSymbol();
//   let correctResult = getCorrectResult(firstNumber, secondNumber, operator);
//   console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
//   let answer = String(readlineSync.question('Your answer: '));
//   if (answer === correctResult) {
//     console.log('Correct!');
//     let i = 0;
//     while (i < 2) {
//       firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
//       secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
//       operator = getOperatorSymbol();
//       correctResult = getCorrectResult(firstNumber, secondNumber, operator);
//       console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
//       answer = Number(readlineSync.question('Your answer: '));
//       i += 1;
//       console.log('Correct!');
//     }
//     console.log(`Congratulations, ${user}`);
//   } else {
//     console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${user}!`);
//   }
// }
//
// letsCalculate();