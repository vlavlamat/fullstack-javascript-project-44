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
  const warning = 'Please, use "yes" or "no" in your answer';
  console.log(`Question: ${number}`);
  const answer = String(readlineSync.question('Your answer: '));
  return (answer === 'yes' || answer === 'no') ? answer : warning;
}

// const randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);

// 5. Let's play
function letsPlay() {
  const randomNumber = getRandomInt(minRangeNumber, maxRangeNumber);
  const currentAnswer = questions(randomNumber);
  const trueAnswer = isEven(randomNumber);
  if (currentAnswer !== 'yes' || currentAnswer !== 'no') {
    console.log(currentAnswer);
    letsPlay();
  }
  if ((currentAnswer === 'yes' || currentAnswer === 'no') && (currentAnswer === trueAnswer)) {
    let count = 0;
    while (count < 2) {
      count += 1;
      letsPlay();
    }
  } else if ((currentAnswer === 'yes' || currentAnswer === 'no') && (currentAnswer !== trueAnswer)) {

  }
}

letsPlay();
