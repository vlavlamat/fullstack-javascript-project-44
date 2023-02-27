import {
  getRandomNumber,
  greetingAndRules,
  questionAndAnswer,
  getGreatCommonDivisor,
} from '../src/index.js';

// Greetings and getting username and declare rules:
const rule = 'Find the greatest common divisor of given numbers.';
const gamerName = greetingAndRules(rule);

// Game main function
function getGreatestDivisor() {
  const minRangeNumber = 1; // Set up a range for random numbers
  const maxRangeNumber = 100;
  const firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get first random number
  const secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get second random
  const correctResult = getGreatCommonDivisor(firstNumber, secondNumber); // Get correct answer
  const answer = questionAndAnswer(firstNumber, secondNumber); // Get an answer
  if (answer === correctResult) {
    console.log('Correct!');
  }
  if (answer !== correctResult) {
    return `'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${gamerName}!`;
  }
  return `Congratulations, ${gamerName}!`;
}

export default getGreatestDivisor;
