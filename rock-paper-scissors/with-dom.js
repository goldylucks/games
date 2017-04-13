document.addEventListener('keypress', onKeypress)
document.addEventListener('click', onClick)

let player1Choice
let player2Choice

function onClick (evt) {
  if (evt.target.id !== 'restart') {
    return
  }
  restart()
}

function onKeypress (evt) {
  const key = evt.key
  if (key === '1') {
    player1Choice = player1Choice || 'rock'
  }
  if (key === '2') {
    player1Choice = player1Choice || 'paper'
  }
  if (key === '3') {
    player1Choice = player1Choice || 'scissors'
  }
  if (key === '8') {
    player2Choice = player2Choice || 'rock'
  }
  if (key === '9') {
    player2Choice = player2Choice || 'paper'
  }
  if (key === '0') {
    player2Choice = player2Choice || 'scissors'
  }
  if (player1Choice) {
    el('player1-waiting').style.display = 'none'
  }
  if (player2Choice) {
    el('player2-waiting').style.display = 'none'
  }
  if (!player1Choice || !player2Choice) {
    return
  }
  el('result').textContent = compare(player1Choice, player2Choice)
}

function restart () {
  el('result').textContent = ''
  el('player1-waiting').style.display = 'block'
  el('player2-waiting').style.display = 'block'
  player1Choice = null
  player2Choice = null
}

function compare (p1Choice, p2Choice) {
  if (p1Choice === p2Choice) {
    return 'Draw! everybody wins! (or loses??)'
  }
  if (p1Choice === 'rock' && p2Choice === 'scissors') {
    return 'p1 wins!'
  }
  if (p1Choice === 'scissors' && p2Choice === 'paper') {
    return 'p1 wins!'
  }
  if (p1Choice === 'rock' && p2Choice === 'paper') {
    return 'p2 wins!'
  }
  if (p1Choice === 'scissors' && p2Choice === 'rock') {
    return 'p2 wins!'
  }
}

function el (id) {
  return document.getElementById(id)
}