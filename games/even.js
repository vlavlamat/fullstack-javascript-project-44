import {
  greetingAndRules,
  getRandomNumber,
  evenOrNot,
  questionAndAnswer,
} from '../src/index.js';

// Greetings and getting username and declare rules:
const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
const gamerName = greetingAndRules(rule);

function guessEven() {
  let count = 0;
  const minRangeNumber = 1; // Set up a range for random numbers
  const maxRangeNumber = 30;
  while (count < 3) {
    const randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get random number
    const trueAnswer = evenOrNot(randomNumber); // Get true answer
    const answer = questionAndAnswer(randomNumber); // Asking question and getting answer
    if (answer === trueAnswer) {
      console.log('Correct!');
      count += 1;
    }
    if (answer !== trueAnswer) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${gamerName}!`;
    }
  }
  return `Congratulations, ${gamerName}!`;
}

export default guessEven;
