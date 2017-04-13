/*
const
prompt alert
if else === > < ! &&
Math.random
function return
*/

play()

function play () {
  // prompt user for rock paper or scissors
  const playerChoice = prompt('rock paper or scissors?')
  if (!playerChoice) {
    alert('Dont wanna play? fine! Im outta here!')
    return
  }
  // get random choice for computer
  const computerChoice = getRandomChoice()

  // compare the two
  if (playerChoice === computerChoice) {
    alert('its a draw!')
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    alert('paper beats rock, computer wins!')
  } else if (computerChoice === 'rock' && playerChoice === 'paper') {
    alert('paper beats rock, player wins!')
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    alert('rock beats scissors, computer wins!')
  } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
    alert('rock beats scissors, player wins!')
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    alert('scissors beats paper, computer wins!')
  } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
    alert('scissors beats paper, player wins!')
  } else {
    alert('something has gone terribly wrong ... Alert the troops!')
  }  
  // repeat
  play()
}

function getRandomChoice () {
  const n = Math.random()
  if (n < 0.33) {
    return 'scissors'
  }
  if (n < 0.67) {
    return 'rock'
  }
  return 'paper'
}
