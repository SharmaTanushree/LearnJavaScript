const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_SELECT = 'ROCK';
let gameStarted = false;
const DRAW = 'DRAW';
const COMPUTER_WON = 'Computer won!';
const PLAYER_WON = 'Player won!';


const getPlayerChoice = function(){
  let selection = prompt(`${ROCK},${PAPER},${SCISSORS}?`,'').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ){
    alert(`Invalid Choice! we have chosen ${DEFAULT_SELECT} for you`);
    return DEFAULT_SELECT
  }
  return selection;
}

const getComputerChoice = function(){
  let select = Math.random();
  if(select <= 0.34){
    return ROCK;
  }
  else if(select <= 0.68){
    return PAPER;
  }
  else{
    return SCISSORS;
  }
}

const declareResult = function(pchoice, cchoice){
if(pchoice == cchoice){
  return DRAW;
}
else if(pchoice == ROCK && cchoice == PAPER  ||
        pchoice == SCISSORS && cchoice == ROCK ||
        pchoice == PAPER && cchoice == SCISSORS
)
{
  return COMPUTER_WON;
}
else{
  return PLAYER_WON;
}
}

startGameBtn.addEventListener('click',()=>{
  if(gameStarted){
    return;
  }
  gameStarted = true;
  console.log('Game is starting...............');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const result = declareResult(playerChoice, computerChoice);
  console.log('PC',playerChoice);
  console.log('CC',playerChoice);
  console.log('result',result);
});


