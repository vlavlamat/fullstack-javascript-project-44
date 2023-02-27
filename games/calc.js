import {
  greetingAndRules,
  getRandomNumber,
  calculateResult,
  getOperatorSymbol,
  questionAndAnswer,
} from '../src/index.js';

// Greetings and getting username and declare rules:
const rule = 'What is the result of the expression?';
const gamerName = greetingAndRules(rule);

// Game main function
function letsCalculate() {
  const minRangeNumber = 1; // Set up a range for random numbers
  const maxRangeNumber = 50;
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get first random number
    const secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get second random
    const operator = getOperatorSymbol(); // Get random operator
    const correctResult = calculateResult(firstNumber, secondNumber, operator);
    const answer = questionAndAnswer(firstNumber, secondNumber, operator); // Get an answer
    if (answer === correctResult) {
      console.log('Correct!');
    }
    if (answer !== correctResult) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${gamerName}!`;
    }
  }
  return `Congratulations, ${gamerName}!`;
}

export default letsCalculate;
