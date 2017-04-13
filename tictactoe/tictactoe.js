/*
let const
prompt alert
if ! ? : 
function return
[] indexOf length filter
*/

let position
let turn

play()

function play () {
  turn = 'player 1'
  position = ['indexOffsetDummy', 1, 2, 3, 4, 5, 6, 7, 8, 9]
  nextMove()
}

function nextMove () {
  const move = parseInt(
    prompt(turn + ' make your move\n' + getBoard())
  )

  if (!move) {
    return alert('ok, no need to get angry, we can play something else ...')
  }

  if (position.indexOf(move) === -1) {
    alert(move + ' is not a legal move!\nPlease follow the rules, this is a society!')
    return nextMove()
  }

  position[move] = turn === 'player 1' ? 'X' : 'O'

  turn = turn === 'player 1' ? 'player 2' : 'player 1'

  const gameResult = getGameResult()

  if (gameResult) {
    alert(gameResult)
    return play()
  }
  nextMove()
}

function getGameResult () {
  const [dummy, a, b, c, d, e, f, g, h, i] = position
  let result
  return winnerOn(a, b, c) // row1
      || winnerOn(d, e, f) // row2
      || winnerOn(g, h, i) // row3
      || winnerOn(a, d, g) // column1
      || winnerOn(b, e, h) // column2
      || winnerOn(c, f, i) // column3
      || winnerOn(a, e, i) // diagonal top to bottom
      || winnerOn(g, e, c) // diagonal bottom to top
      || isDraw()  
}

function isDraw () {
  return position.filter(isNaN).length === position.length && 'Its a draw!'
}

function winnerOn(pos1, pos2, pos3) {
  if (pos1 === pos2 && pos1 === pos3) {
    return pos1 === 'X' ? 'Player 1 wins!' : 'Player 2 wins!'
  }
}

function getBoard () {
  return `
    ${position[1]} | ${position[2]} | ${position[3]}
    ---  ---  ---
    ${position[4]} | ${position[5]} | ${position[6]}
    ---  ---  ---
    ${position[7]} | ${position[8]} | ${position[9]}
  `
}
