// import readlineSync from 'readline-sync';
import { greeting, getGameRules } from './index.js';

// 01. Greeting:

greeting();

// 02. Game rules:
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
getGameRules(gameRules);

// 04. Get a random number:

// const minRangeNumber = 1;
// const maxRangeNumber = 30;
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// // 05. Check if the number even or odd:
//
// function isEven(numberForCheck) {
//   let evenOrOdd;
//   if (numberForCheck % 2 === 0) {
//     evenOrOdd = 'yes';
//   } else if (numberForCheck % 2 !== 0) {
//     evenOrOdd = 'no';
//   }
//   return evenOrOdd;
// }
//
// // 06. Let's play:
//
// function letsPlay() {
//   let randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
//   let trueAnswer = isEven(randomNumber);
//   console.log(`Question: ${randomNumber}`);
//   let answer = String(readlineSync.question('Your answer: '));
//   if (answer === 'yes' || answer === 'no') {
//     if (answer === trueAnswer) {
//       console.log('Correct!');
//       let i = 0;
//       while (i < 2) {
//         randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
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
//     randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
//     trueAnswer = isEven(randomNumber);
//     letsPlay(randomNumber);
//   }
// }
//
// export default letsPlay;
