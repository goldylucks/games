/*
const let
prompt alert confirm
for continue
Math random floor
replace
function return
[] indexOf length split join
*/

const hangmanStages = getHangmanStages()
const words = ['dog', 'dorothy', 'matisyahu', 'resort']
let word
let progress
let guessCount

play()

function play () {
  word = randomItem(words)
  console.log(word)
  progress = word.replace(/[a-z]/g, '_').split('')
  guessCount = 0
  guess()
}

function randomItem (words) {
  const idx = Math.floor(Math.random() * words.length)
  return words[idx]
}

function guess () {
  const guessed = prompt('guess a letter:  ' + progress.join(' ') + hangmanStages[guessCount])

  if (!guessed) {
    return alert('lataz fool! me gonna hang someone else!')
  }

  let isWrong = true

  for (let idx = 0; idx < word.length; idx++) {
    const letter = word[idx]
    if (letter !== guessed) {
      continue
    }
    progress[idx] = letter
    isWrong = false
  }

  if (isWrong) {
    guessCount++
  }  
  
  if (guessCount === hangmanStages.length) {
    return lose()
  }

  if (progress.indexOf('_') === -1) {
    return win()
  }

  guess()
}

function lose () {
  const playAgain = confirm('you dead fool!' + hangmanStages[hangmanStages.length - 1])
  if (!playAgain) {
    return alert('lataz fool! me gonna hang someone else!')
  }
  play()
}

function win () {
  const playAgain = confirm('Phew! that was close! guess I gonna have to let u live eh?\nPlay again?')
  if (!playAgain) {
    return alert('lataz fool! me gonna hang someone else!')
  }
  play()
}

function getHangmanStages () { 
  return [
    `
    `,
    `
    |
    |
    |
    |
    |
    |
    |
    `,
    `
    |---------
    |
    |
    |
    |
    |
    |
    `,
    `
    |---------
    |    |
    |
    |
    |
    |
    |
    `,
    `
    |---------
    |    |
    |    O
    |
    |
    |
    |
    `,
    `
    |---------
    |    |
    |    O
    |    |
    |
    |
    |
    `,
    `
    |---------
    |    |
    |    O
    |    |-
    |
    |
    |
    `,
    `
    |---------
    |    |
    |    O
    |   -|-
    |
    |
    |
    `,
    `
    |---------
    |    |
    |    O
    |   -|-
    |     \\
    |
    |
    `,
    `
    |---------
    |    |
    |    O
    |   -|-
    |   / \\
    |
    |
    `,
  ]
}