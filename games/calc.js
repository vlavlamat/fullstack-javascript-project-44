import {
  greetingAndRules,
  getRandomNumber,
  getCorrectResult,
  getOperatorSymbol,
  questionAndAnswer,
} from '../src/index.js';

// Greetings and getting username and declare rules:
const rule = 'What is the result of the expression?';
const gamerName = greetingAndRules(rule);

function letsCalculate() {
  let count = 0;
  const minRangeNumber = 1; // Set up a range for random numbers
  const maxRangeNumber = 50;
  while (count < 3) {
    const firstNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get first random number
    const secondNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get second random
    const operator = getOperatorSymbol(); // Get random operator
    const correctResult = getCorrectResult(firstNumber, secondNumber, operator);
    const answer = questionAndAnswer(firstNumber, secondNumber, operator); // Get an answer
    if (answer === correctResult) {
      console.log('Correct!');
      count += 1;
    }
    if (answer !== correctResult) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${gamerName}!`;
    }
  }
  return `Congratulations, ${gamerName}!`;
}

export default letsCalculate;
