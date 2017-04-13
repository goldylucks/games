/*
let
console.log
if else < ++ === %
for
*/

// count from 1 to 20
for (let number = 0; number < 20; number++) {
  // if number is divisible by 3 and 5, display fizzbuzz
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('fizzbuzz')
  } else if (number % 3 === 0) {
    console.log('fizz')
  } else if (number % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(number)
  }
}

console.log('done')
