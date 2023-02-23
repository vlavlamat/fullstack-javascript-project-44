// import readlineSync from 'readline-sync';
import {
  greeting,
  getRandomNumber,
  evenOrNot,
  questionAndAnswer,
} from '../src/index.js';

// Greetings and getting username:
const gamerName = greeting();

// Declare game rules:
console.log('Answer "yes" if the number is even, otherwise answer "no"');

// Game cycle:
function gameCycle() {
  let result;
  const minRangeNumber = 1; // Set up a range for random number
  const maxRangeNumber = 30;
  const randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get random number
  const trueAnswer = evenOrNot(randomNumber); // Get true answer
  const answer = questionAndAnswer(randomNumber); // Asking question and getting answer
  if (answer === 'yes' || answer === 'no') {
    if (answer === trueAnswer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      result = false;
    }
  } else if (answer !== 'yes' || answer !== 'no') {
    console.log('Please, use "yes" or "no" in your answer');
  }
  return result;
}

// Let's play:
// function letsPlay() {
//   let result = gameCycle();
//   switch (result) {
//     case true:
//       result = gameCycle();
//       switch (result) {
//         case true:
//           result = gameCycle();
//           switch (result) {
//             case true:
//               console.log(`Congratulations, ${gamerName}!`);
//               break;
//             case false:
//               console.log(`Let's try again, ${gamerName}!`);
//               break;
//             default:
//               letsPlay();
//           }
//           break;
//         case false:
//           console.log(`Let's try again, ${gamerName}!`);
//           break;
//         default:
//           letsPlay();
//       }
//       break;
//     case false:
//       console.log(`Let's try again, ${gamerName}!`);
//       break;
//     default:
//       letsPlay();
//   }
// }

function letsPlay() {
  let result = gameCycle();
  if (result === true) {
    for (let i = 0; i < 2; i += 1) {
      result = gameCycle();
    }
    console.log(`Congratulations, ${gamerName}!`);
  }
  if (result === false) {
    console.log(`Let's try again, ${gamerName}!`);
  }
}

export default letsPlay;
