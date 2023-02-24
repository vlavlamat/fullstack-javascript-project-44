// import readlineSync from 'readline-sync';
import {
  greetingAndRules,
  getRandomNumber,
  evenOrNot,
  questionAndAnswer,
} from '../src/index.js';

// Greetings and getting username and declare rules:
const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
const gamerName = greetingAndRules(rule);

// eslint-disable-next-line consistent-return
function guessEven() {
  const minRangeNumber = 1; // Set up a range for random number
  const maxRangeNumber = 30;
  let randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get random number
  let trueAnswer = evenOrNot(randomNumber); // Get true answer
  let answer = questionAndAnswer(randomNumber); // Asking question and getting answer
  if (answer === 'yes' || answer === 'no') {
    if (answer === trueAnswer) {
      console.log('Correct!');
      let count = 0;
      while (count < 2) {
        randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
        trueAnswer = evenOrNot(randomNumber);
        answer = questionAndAnswer(randomNumber);
        if (answer === 'yes' || answer === 'no') {
          if (answer === trueAnswer) {
            console.log('Correct!');
            count += 1;
          }
          if (answer !== trueAnswer) {
            return `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${gamerName}!`;
          }
        } else {
          console.log('Please, use "yes" or "no" in your answer');
        }
      }
      return `Congratulations, ${gamerName}`;
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${gamerName}!`;
  }
  if (answer !== 'yes' || answer !== 'no') {
    console.log('Please, use "yes" or "no" in your answer');
    return guessEven();
  }
}

export default guessEven;
