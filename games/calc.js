import {
  greetingAndRules,
  getRandomNumber,
  calculateResult,
  getOperatorSymbol,
  questionAndAnswer,
  getAnswer,
} from '../src/index.js';

// Greetings and getting username and declare rules:
const rule = 'What is the result of the expression?';
const gamerName = greetingAndRules(rule);

// Main game function
function letsCalculate() {
  const minRangeNumber = 1; // Set up a range for random numbers
  const maxRangeNumber = 30;
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get first random number
    const secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get second random
    const operator = getOperatorSymbol(); // Get random operator
    const correctResult = calculateResult(firstNumber, secondNumber, operator);
    const answer = questionAndAnswer(firstNumber, secondNumber, operator); // Get an answer
    if (answer === correctResult) {
      console.log(getAnswer(gamerName, answer, correctResult));
    } else {
      return getAnswer(gamerName, answer, correctResult);
    }
  }
  return `Congratulations, ${gamerName}!`;
}

export default letsCalculate;
