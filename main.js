let width;
const rock = document.getElementById("rockImg");
rock.addEventListener("click", rockPlay);
const paper = document.getElementById("paperImg");
paper.addEventListener("click", paperPlay);
const scissors = document.getElementById("scissorsImg");
scissors.addEventListener("click", scissorsPlay);
const info = document.getElementById("info");
const choiceImg = document.getElementById("choiceImg");
const playerChoiceImg = document.getElementById("playerChoiceImg");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerScoreNum = 0;
let computerScoreNum = 0;
const reset = document.getElementById("reset");
reset.addEventListener("click", resetGame);

function resetGame() {
  playerScoreNum = 0;
  computerScoreNum = 0;
  playerScore.innerHTML = playerScoreNum;
  computerScore.innerHTML = computerScoreNum;
  info.innerHTML = "Rock Paper Scissors";
  playerChoiceImg.src = "images/choice.svg";
}
function rockPlay() {
  width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width > 767) {
    playerChoiceImg.src = "images/rock.svg";
  } else {
    rock.style.height = "100px";
  }
  let computerChoice = computerPlay();
  const playerChoice = "rock";
  imgChoice(computerChoice);
  let result = roundResults(playerChoice, computerChoice);
  checkGameResult(result);
  info.innerHTML = result;
  rock.style.pointerEvents = "none";
  paper.style.pointerEvents = "none";
  scissors.style.pointerEvents = "none";
  setTimeout(function () {
    rock.style.height = "77px";
    choiceImg.src = "images/choice.svg";
    rock.style.pointerEvents = "auto";
    paper.style.pointerEvents = "auto";
    scissors.style.pointerEvents = "auto";
    playerChoiceImg.src = "images/choice.svg";
  }, 2000);
}
function paperPlay() {
  width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width > 767) {
    playerChoiceImg.src = "images/paper.svg";
  } else {
    paper.style.height = "100px";
  }
  let computerChoice = computerPlay();
  const playerChoice = "paper";
  imgChoice(computerChoice);
  let result = roundResults(playerChoice, computerChoice);
  checkGameResult(result);
  info.innerHTML = result;
  rock.style.pointerEvents = "none";
  paper.style.pointerEvents = "none";
  scissors.style.pointerEvents = "none";
  setTimeout(function () {
    paper.style.height = "77px";
    choiceImg.src = "images/choice.svg";
    rock.style.pointerEvents = "auto";
    paper.style.pointerEvents = "auto";
    scissors.style.pointerEvents = "auto";
    playerChoiceImg.src = "images/choice.svg";
  }, 2000);
}
function scissorsPlay() {
  width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width > 767) {
    playerChoiceImg.src = "images/scissors.svg";
  } else {
    scissors.style.height = "100px";
  }
  let computerChoice = computerPlay();
  const playerChoice = "scissors";
  imgChoice(computerChoice);
  let result = roundResults(playerChoice, computerChoice);
  checkGameResult(result);
  info.innerHTML = result;
  rock.style.pointerEvents = "none";
  paper.style.pointerEvents = "none";
  scissors.style.pointerEvents = "none";
  setTimeout(function () {
    scissors.style.height = "77px";
    choiceImg.src = "images/choice.svg";
    rock.style.pointerEvents = "auto";
    paper.style.pointerEvents = "auto";
    scissors.style.pointerEvents = "auto";
    playerChoiceImg.src = "images/choice.svg";
  }, 2000);
}
function checkGameResult(result) {
  switch (result) {
    case "You Win! <br> Rock beats Scissors":
      playerScoreNum++;
      playerScore.innerHTML = playerScoreNum;
      break;
    case "You Win! <br> Scissors beats Paper":
      playerScoreNum++;
      playerScore.innerHTML = playerScoreNum;
      break;
    case "You Win! <br> Paper beats Rock":
      playerScoreNum++;
      playerScore.innerHTML = playerScoreNum;
      break;
    case "You Lose! <br> Paper beats Rock":
      computerScoreNum++;
      computerScore.innerHTML = computerScoreNum;
      break;
    case "You Lose! <br> Rock beats Scissors":
      computerScoreNum++;
      computerScore.innerHTML = computerScoreNum;
      break;
    case "You Lose! <br> Scissors beats Paper":
      computerScoreNum++;
      computerScore.innerHTML = computerScoreNum;
      break;

    default:
      return 0;
  }
}
function imgChoice(computerChoice) {
  switch (computerChoice) {
    case "rock":
      choiceImg.src = "images/rock.svg";
      break;
    case "paper":
      choiceImg.src = "images/paper.svg";
      break;
    case "scissors":
      choiceImg.src = "images/scissors.svg";
      break;
  }
}
function roundResults(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw!";
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You Win! <br> Rock beats Scissors";
    } else if (computerChoice === "paper") {
      return "You Lose! <br> Paper beats Rock";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You Win! <br> Scissors beats Paper";
    } else if (computerChoice === "rock") {
      return "You Lose! <br> Rock beats Scissors";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "You Win! <br> Paper beats Rock";
    } else if (computerChoice === "scissors") {
      return "You Lose! <br> Scissors beats Paper";
    }
  }
}
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}
