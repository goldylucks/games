/*
const
alert prompt
if else ? : < === !
function return
Math.random
*/

play()

function play () {
  const choice = prompt('heads or tails?')

  if (!choice) {
    alert('bailing! saionara, arrivederci, adios moochachos!')
    return
  }
  const flipResult = flip()

  if (choice === flipResult) {
    alert(flipResult + '! hooray!')
  } else {
    alert(flipResult + '! boo hoo, go cry to your mama')
  }
  
  play()  
}

function flip () {
  if (Math.random() < 0.5) {
    return 'heads'
  } else {
    return 'tails'
  }
}
