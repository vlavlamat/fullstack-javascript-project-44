import {
  greetingAndRules,
  getRandomNumber,
  primeOrNot,
  questionAndAnswer,
  getAnswer,
} from '../src/index.js';

// Greeting and getting username and declare rules:
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gamerName = greetingAndRules(rule);

// Main game function
function primeGame() {
  const minRangeNumber = 1; // Set up a range for random numbers
  const maxRangeNumber = 200;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber);
    const trueAnswer = primeOrNot(randomNumber);
    const answer = questionAndAnswer(randomNumber); // Asking question and getting answer
    if (answer === trueAnswer) {
      console.log(getAnswer(gamerName, answer, trueAnswer));
    } else {
      return getAnswer(gamerName, answer, trueAnswer);
    }
  }
  return `Congratulations, ${gamerName}!`;
}

export default primeGame;
