// import readlineSync from 'readline-sync';
//
// // 01. Greeting:
//
// console.log('Welcome to the Brain Games!');
//
// // 1. Get acquainted:
//
// const userName = readlineSync.question('May I have your name? ');
// console.log(`Hello, ${userName}!`);
//
// // 2. Game rules:
//
// console.log('What is the result of the expression?');

// 3. Get a random numbers:

const minRangeNumber = 1;
const maxRangeNumber = 31;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let firstNumber = getRandomInt(minRangeNumber, maxRangeNumber);
let secondNumber = getRandomInt(minRangeNumber, maxRangeNumber);

// 3. Get a random operator:

const minRange = 1;
const maxRange = 3;
function getRandomOperator(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}

// 4. Get a random operator:
// number 1 means Addition - '+'
// number 2 means Division - '-'
// number 3 means Multiplication - '*'
const operatorSelection = getRandomOperator(minRange, maxRange);

console.log(operatorSelection);

// 4. Getting the correct result:

// function result(firstOperand, secondOperand) {
//   let evenOrOdd;
//   if (numberForCheck % 2 === 0) {
//     evenOrOdd = 'yes';
//   } else if (numberForCheck % 2 !== 0) {
//     evenOrOdd = 'no';
//   }
//   return evenOrOdd;
// }

// 5. Let's play:
//
// function letsPlay() {
//   let randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
//   let trueAnswer = isEven(randomNumber);
//   console.log(`Question: ${randomNumber}`);
//   let answer = String(readlineSync.question('Your answer: '));
//   if (answer === 'yes' || answer === 'no') {
//     if (answer === trueAnswer) {
//       console.log('Correct!');
//       let i = 0;
//       while (i < 2) {
//         randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
//         trueAnswer = isEven(randomNumber);
//         console.log(`Question: ${randomNumber}`);
//         answer = String(readlineSync.question('Your answer: '));
//         i += 1;
//         console.log('Correct!');
//       }
//       console.log(`Congratulations, ${userName}`);
//     }
//     if (answer !== trueAnswer) {
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${userName}!`);
//     }
//   } else {
//     console.log('Please, use "yes" or "no" in your answer');
//     randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
//     trueAnswer = isEven(randomNumber);
//     letsPlay(randomNumber);
//   }
// }
//
// export default letsPlay;
