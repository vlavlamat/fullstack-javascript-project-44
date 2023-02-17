import readlineSync from 'readline-sync';

// 01. Greeting:

console.log('Welcome to the Brain Games!');

// 1. Get acquainted:

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// 2. Game rules:

console.log('Answer "yes" if the number is even, otherwise answer "no"');

// 3. Get a random number:

const minRangeNumber = 1;
const maxRangeNumber = 31;
function getRandomInt(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}

// 4. Check if the number even or odd:

function isEven(numberForCheck) {
  let evenOrOdd;
  if (numberForCheck % 2 === 0) {
    evenOrOdd = 'yes';
  } else if (numberForCheck % 2 !== 0) {
    evenOrOdd = 'no';
  }
  return evenOrOdd;
}

// 5. Let's play:

function letsPlay() {
  let randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
  let trueAnswer = isEven(randomNumber);
  console.log(`Question: ${randomNumber}`);
  let answer = String(readlineSync.question('Your answer: '));
  if (answer === 'yes' || answer === 'no') {
    if (answer === trueAnswer) {
      console.log('Correct!');
      let i = 0;
      while (i < 2) {
        randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
        trueAnswer = isEven(randomNumber);
        console.log(`Question: ${randomNumber}`);
        answer = String(readlineSync.question('Your answer: '));
        i += 1;
        console.log('Correct!');
      }
      console.log(`Congratulations, ${userName}`);
    }
    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${userName}!`);
    }
  } else {
    console.log('Please, use "yes" or "no" in your answer');
    randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
    trueAnswer = isEven(randomNumber);
    letsPlay(randomNumber);
  }
}

export default letsPlay;
