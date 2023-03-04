import {
  getRandomNumber,
  greetingAndRules,
  questionAndAnswer,
  getGreatCommonDivisor,
  getAnswer,
} from '../src/index.js';

// Greetings and getting username and declare rules:
const rule = 'Find the greatest common divisor of given numbers.';
const gamerName = greetingAndRules(rule);

// Main game function
function greatestDivisorGame() {
  const minRangeNumber = 1; // Set up a range for random numbers
  const maxRangeNumber = 100;
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get first random number
    const secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get second random
    const correctResult = getGreatCommonDivisor(firstNumber, secondNumber); // Get correct answer
    const answer = questionAndAnswer(firstNumber, secondNumber); // Get an answer
    if (answer === correctResult) {
      console.log(getAnswer(gamerName, answer, correctResult));
    } else {
      return getAnswer(gamerName, answer, correctResult);
    }
  }
  return `Congratulations, ${gamerName}!`;
}

export default greatestDivisorGame;
