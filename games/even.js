// import readlineSync from 'readline-sync';
import {
  greeting,
  getRandomNumber,
  evenOrNot,
  questionAndAnswer,
  gameCycle,
} from '../src/index.js';

// Greetings and getting username:
greeting();

// Declare game rules:
console.log('Answer "yes" if the number is even, otherwise answer "no"');

// Let's play:
function letsPlay() {
  const result = gameCycle();
  switch (result) {
    case 1:
      gameCycle();
      break;
    case 2:
      break;
    default:
      gameCycle();
  }
}

export default letsPlay;
