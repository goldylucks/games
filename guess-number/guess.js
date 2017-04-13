/*
let const
prompt alert
if else ! > <
Math.random/floor
function(args) return
parseInt
*/

let number

play(1, 100)

function play (min, max) {
  number = getRandom(min, max)
  guess()
}

function guess () {
  const guessed = parseInt(prompt('guess a number between 1 to 100'))
  if (!guessed) {
    alert('fine! I\'ll find someone else to play! :(')
    return
  }
  if (guessed === number) {
    alert('you win! Lets play again!')
    play()
    return
  }
  if (guessed > number) {
    alert('too high')
  } else {
    alert('too low')
  }
  guess()
}

function getRandom (min, max) {
  return Math.floor(Math.random() * max) + min
}
