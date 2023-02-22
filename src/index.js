import readlineSync from 'readline-sync';

// The function greeting player
function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

// The question and answer function
function questionAndAnswer(number) {
  console.log(`Question: ${number}`);
  return String(readlineSync.question('Your answer: '));
}

// The function returns random number in range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The function check if a number is odd or even
function evenOrNot(numberForCheck) {
  let evenOrOdd;
  if (numberForCheck % 2 === 0) {
    evenOrOdd = 'yes';
  } else if (numberForCheck % 2 !== 0) {
    evenOrOdd = 'no';
  }
  return evenOrOdd;
}

// The function select a random operator among '+', '-', '*'
function getOperatorSymbol() {
  const operator = Math.floor(Math.random() * 2) + 1;
  switch (operator) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
}

function gameCycle() {
  let result;
  const minRangeNumber = 1; // Set up a range for random number
  const maxRangeNumber = 30;
  const randomNumber = getRandomNumber(minRangeNumber, maxRangeNumber); // Get random number
  const trueAnswer = evenOrNot(randomNumber); // Get true answer
  const answer = questionAndAnswer(randomNumber); // Asking question and getting answer
  if (answer === 'yes' || answer === 'no') {
    if (answer === trueAnswer) {
      console.log('Correct!');
      result = 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      result = 2;
    }
  } else if (answer !== 'yes' || answer !== 'no') {
    console.log('Please, use "yes" or "no" in your answer');
    result = 3;
    gameCycle();
  }
  return result;
}

export {
  getRandomNumber,
  greeting,
  evenOrNot,
  getOperatorSymbol,
  questionAndAnswer,
  gameCycle,
};
