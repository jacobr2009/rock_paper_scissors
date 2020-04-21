let capitalizeFirst = string => {
  let first = string[0].toUpperCase();
  let rest = string.substring(1,);
  return first + rest;
}

let computerPlay = () => {
      let randomNumber = math.randomInt(0,3);

      if (randomNumber === 0) {
        return 'rock';
      } else if (randomNumber === 1) {
        return 'paper';
      } else {
        return 'scissors';
      }

    };

    let playerScore = 0;
    let computerScore = 0;
    let gameStatus = 'over';

    const playerSelection = document.querySelector('#player-selection');
    const computerSelection = document.querySelector('#computer-selection');

    let playRockPaperScissors = (e) => {

      if (gameStatus === 'playing') {

        let playerElement = document.querySelector(`#${e.target.id}`);
        playerElement.classList.add('clicked');
        let playerChoice = e.target.id;

        computerChoice = computerPlay();

        computerSelection.textContent = capitalizeFirst(computerChoice);
        playerSelection.textContent = capitalizeFirst(playerChoice);

      let result = '';

        if (playerChoice === computerChoice) {
          result = 'tie';
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
          result = 'win';
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
          result = 'win';
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
          result = 'win';
        } else {
          result = 'lose'
        }
  
        if (result === 'win') {
          playerScore++
        } else if (result === 'lose') {
          computerScore++
        }

      }
      
      const playerScoreText = document.querySelector('#player-score');
      const computerScoreText = document.querySelector('#computer-score');

      playerScoreText.textContent = playerScore;
      computerScoreText.textContent = computerScore;

      const endMessage = document.querySelector('#end-message');

      if (computerScore == 5) {
        endMessage.textContent = 'You Lose!';
        gameStatus = 'lost';
      } else if (playerScore == 5) {
        endMessage.textContent = 'You Win!';
        gameStatus = 'won';
      }

    }

    let newGame = (e) => {
      playerScore = 0;
      computerScore = 0;
      gameStatus = 'playing';
      console.log('playing game');
      let gameButton = document.querySelector('button');
      gameButton.classList.add('clicked');
      
      const playerScoreText = document.querySelector('#player-score');
      const computerScoreText = document.querySelector('#computer-score');

      playerScoreText.textContent = playerScore;
      computerScoreText.textContent = computerScore;

      const endMessage = document.querySelector('#end-message');
      endMessage.textContent = '';

    }

    let removeTransition = function(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicked');
  }

    choices = Array.from(document.querySelectorAll('.choice'));
    choices.forEach(choice => choice.addEventListener('click', playRockPaperScissors));
    choices.forEach(choice => choice.addEventListener('transitionend', removeTransition));

    const button = document.querySelector('button');
    button.addEventListener('click', newGame);
    button.addEventListener('transitionend', removeTransition); 