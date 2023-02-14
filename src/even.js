import readlineSync from 'readline-sync';

// 1. Game rules
console.log('Answer "yes" if the number is even, otherwise answer "no"');

// 2. Function for getting a random number
const minRangeNumber = 1;
const maxRangeNumber = 31;
function getRandomInt(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}

// 3. Getting random number
const randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);

// 4. Function for checking - even or odd
function isEven(numberForCheck) {
  let evenOrOdd;
  if (numberForCheck % 2 === 0) {
    evenOrOdd = 'yes';
  } else if (numberForCheck % 2 !== 0) {
    evenOrOdd = 'no';
  }
  return evenOrOdd;
}

// 5. Checking the random number if it is even or odd
const trueAnswer = isEven(randomNumber);

// 6. Start the game
console.log(`Question: ${randomNumber}`);
const currentAnswer = String(readlineSync.question('Your answer: '));

// 7. Checking the answer
function compareAnswers(answer) {
  let correctAnswer;
  if (answer === 'yes' || answer === 'no') {
    if (answer === trueAnswer) {
      correctAnswer = 'Correct!';
    } else if (answer !== trueAnswer) {
      correctAnswer = `'${currentAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`;
    }
  } else {
    correctAnswer = 'Please, use only "yes" or "no"';
  }
  return correctAnswer;
}
