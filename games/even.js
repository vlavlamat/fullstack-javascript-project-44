// import readlineSync from 'readline-sync';
import {
  greeting,
<<<<<<< HEAD
  getGameRules,
=======
>>>>>>> ef7ecc2 (mod: brain-even.js renamed: calc.js new file: even.js deleted: check.js deleted even.js)
  getRandomNumber,
  evenOrNot,
  questionAndAnswer,
} from '../src/index.js';

<<<<<<< HEAD
// Declare game rules:
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

// Let's play:
function letsPlay() {
  const gamerName = greeting(); // Greetings and getting username
  getGameRules(gameRules); // Declare game rules
  const minRangeNumber = 1; // Set up a range for random number
  const maxRangeNumber = 30;
  let randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get random number
  let trueAnswer = evenOrNot(randomNumber); // Get true answer
  let answer = questionAndAnswer(randomNumber); // Asking question and getting answer
  if (answer === 'yes' || answer === 'no') {
    if (answer === trueAnswer) {
      console.log('Correct!');
      randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
      trueAnswer = evenOrNot(randomNumber);
      answer = questionAndAnswer(randomNumber);
      if (answer === 'yes' || answer === 'no') {
        if (answer === trueAnswer) {
          randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
          trueAnswer = evenOrNot(randomNumber);
          answer = questionAndAnswer(randomNumber);
          console.log('Correct!');
          console.log(`Congratulations, ${gamerName}!`);
        }
        if (answer !== trueAnswer) {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${gamerName}!`);
        }
      }
      if (answer !== 'yes' || answer !== 'no') {
        console.log('Please, use "yes" or "no" in your answer');
        // letsPlay();
      }
      console.log(`Congratulations, ${gamerName}!`);
    }
    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${gamerName}!`);
    }
  }
  if (answer === 'yes' || answer === 'no') {
    console.log('Please, use "yes" or "no" in your answer');
  }
}

// letsPlay();
=======
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

>>>>>>> ef7ecc2 (mod: brain-even.js renamed: calc.js new file: even.js deleted: check.js deleted even.js)
export default letsPlay;
