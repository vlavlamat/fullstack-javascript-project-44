import readlineSync from 'readline-sync';

// 1. Game rules
console.log('Answer "yes" if the number is even, otherwise answer "no"');

// 2. Get a random number
const minRangeNumber = 1;
const maxRangeNumber = 31;
function getRandomInt(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}

// 3. Check if number even or odd
function isEven(numberForCheck) {
  let evenOrOdd;
  if (numberForCheck % 2 === 0) {
    evenOrOdd = 'yes';
  } else if (numberForCheck % 2 !== 0) {
    evenOrOdd = 'no';
  }
  return evenOrOdd;
}

// 4. Ask a question
function questions(number) {
  console.log(`Question: ${number}`);
  return String(readlineSync.question('Your answer: '));
}

// 5. Let's play
function letsPlay() {
  let randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
  let currentAnswer = questions(randomNumber);
  let trueAnswer = isEven(randomNumber);
  if (currentAnswer === 'yes' || currentAnswer === 'no') {
    if (currentAnswer === trueAnswer) {
      let count = 0;
      while (currentAnswer === trueAnswer && count < 2) {
        randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
        currentAnswer = questions(randomNumber);
        trueAnswer = isEven(randomNumber);
        count += 1;
      }
      console.log('Congratulations!');
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, Bill!`);
    }
  } else {
    console.log('Please, use "yes" or "no" in your answer');
  }
}

export default letsPlay;
