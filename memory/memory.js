play()

function play () {
  const pairsNumber = Number(
    prompt('how many pairs?')
  )
  const positions = getCardsFromPairsNumber(pairsNumber)
  const display = positions.map((position, idx) => 'xx')
  nextGuess(display, positions)
}

function nextGuess (display, positions) {
  const pairsNumber = display.length / 2
  const guess = getGuess(display)
  if (guess === null) {
    return
  }
  display[guess] = positions[guess]
  const guess2 = getGuess(display, true)
  if (guess2 === null) {
    return
  }
  display[guess2] = positions[guess2]
  if (display[guess] === display[guess2]) {
    alert(`Horray, it's a match!
      ${getBoard(display)}
    `)
    if (display.indexOf('xx') === -1) {
      return confirm('Spank my ass and call me Einstein, you won! Play again?')
        ? play() : null
    }
    return nextGuess(display, positions)
  }
  alert(`ohh ... better luck next time ...
    ${getBoard(display)}
  `)
  display[guess] = 'xx'
  display[guess2] = 'xx'
  nextGuess(display, positions)
}

function getGuess (display, isPart2) {
  let guess = prompt(`Which one to flip? ${isPart2 ? '(Part2)' : ''}\n
    ${getBoard(display)}
  `)
  if (!guess) {
    return confirm('Really exit game?') ? null : getGuess(display)
  }
  guess = Number(guess)
  if (display[guess] !== 'xx') {
    alert(`idx ${guess} has already been flipped, please choose another one!`)
    return getGuess(display, isPart2)
  }
  return guess
}

function getBoard (display) {
  const pairsNumber = display.length / 2
  return `
    ${getBoardRow(display.slice(0, pairsNumber))}
    ${getBoardDivider(display)}
    ${getBoardRow(display.slice(pairsNumber))}
  `
}

function getCardsFromPairsNumber (pairsNumber) {
  const positions = []
  for (let idx = 0; idx < pairsNumber; idx++) {
    positions.push(String(idx))
  }
  positions.push(...positions)
  return shuffle(positions)
}

function getBoardRow (cards) {
  return cards.map(toDoubleDigit).join(' | ')
}

function toDoubleDigit (numberString) {
  if (numberString.length === 2) {
    return numberString
  }
  return numberString + ' '
}

function getBoardDivider(cards) {
  return cards.slice(0, cards.length / 2).map(i => '---').join('    ')
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

console.log('done')