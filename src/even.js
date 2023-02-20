// import readlineSync from 'readline-sync';
import { greeting, getGameRules, evenOrNot } from './index.js';

// 01. Greeting:

greeting();

// 02. Game rules:
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
getGameRules(gameRules);

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
