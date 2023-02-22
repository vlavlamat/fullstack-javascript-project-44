// import readlineSync from 'readline-sync';
import {
  greeting,
  getRandomNumber,
  evenOrNot,
  questionAndAnswer,
} from '../src/index.js';

// Greetings and getting username:
greeting();

// Declare game rules:
console.log('Answer "yes" if the number is even, otherwise answer "no"');

// Let's play:
function letsPlay() {
  const minRangeNumber = 1; // Set up a range for random number
  const maxRangeNumber = 30;
  const randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get random number
  const trueAnswer = evenOrNot(randomNumber); // Get true answer
  const answer = questionAndAnswer(randomNumber); // Asking question and getting answer
  if (answer === 'yes' || answer === 'no') {
    if (answer === trueAnswer) {
      let count = 0;
      console.log('Correct!');
      while (count < 2) {
        count += 1;
        letsPlay();
      }
    }
  } else if (answer !== 'yes' || answer !== 'no') {
    console.log('Please, use "yes" or "no" in your answer');
    letsPlay();
  }
}

export default letsPlay;
