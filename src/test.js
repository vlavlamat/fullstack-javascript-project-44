// import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  // greetingAndRules,
  // questionAndAnswer,
} from './index.js';

function progression() {
  const startProgression = getRandomNumber(1, 50);
  // console.log(startProgression);
  const lengthProgression = getRandomNumber(8, 14);
  const endProgression = startProgression + lengthProgression;
  // console.log(endProgression);
  const stepProgression = getRandomNumber(1, 4);
  // console.log(stepProgression);
  let result = '';
  for (let i = startProgression; i <= endProgression; i += stepProgression) {
    result = `${result} ${i}`;
  }
  return result;
}

console.log(progression());
