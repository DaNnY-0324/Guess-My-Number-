'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no INPUT
  if (!guess) {
    displayMessage('NO NUMBER!');

    // When player WINS
  } else if (guess === secretNumber) {
    displayMessage('🥇 CORRECT NUMBER!');
    document.querySelector('.number').textContent = secretNumber;
    changeBackground('#60b347');
    document.querySelector('.number').style.width = '30rem';

    // Highscore Tracker
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'TOO HIGH!' : 'TOO LOW');
      changeBackground('red');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOST THE GAME');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  changeBackground('#222');
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
