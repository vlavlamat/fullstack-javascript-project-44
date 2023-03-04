import {
  getRandomNumber,
  greetingAndRules,
  questionAndAnswer,
  randomProgression,
  getAnswer,
} from '../src/index.js';

// Greetings and getting username and declare rules:
const rule = 'What number is missing in the progression?';
const gamerName = greetingAndRules(rule);

// Main game function
function getProgressionNumber() {
  for (let i = 0; i < 3; i += 1) {
    const startProgression = getRandomNumber(1, 80); // Start progression number
    const stepProgression = getRandomNumber(1, 10); // Step progression
    const currentProgression = randomProgression(startProgression, stepProgression);
    const randomIndex = getRandomNumber(0, currentProgression.length - 1);
    const hiddenElement = String(currentProgression[randomIndex]);
    currentProgression[randomIndex] = '..';
    const answer = questionAndAnswer(currentProgression.join(' '));
    if (answer === hiddenElement) {
      console.log(getAnswer(gamerName, answer, hiddenElement));
    } else {
      return getAnswer(gamerName, answer, hiddenElement);
    }
  }
  return `Congratulations, ${gamerName}!`;
}

export default getProgressionNumber;
