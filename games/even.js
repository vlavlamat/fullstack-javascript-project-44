// import readlineSync from 'readline-sync';
import {
  greeting,
  getGameRules,
  getRandomNumber,
  evenOrNot,
  questionAndAnswer,
} from '../src/index.js';

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
export default letsPlay;
