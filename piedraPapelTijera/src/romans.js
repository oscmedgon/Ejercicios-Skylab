var dictionary = [
  [1, 'I'],
  [5, 'V'],
  [10, 'X'],
  [50, 'L'],
  [100, 'C'],
  [500, 'D'],
  [1000, 'M']
]
function game (numberInput) {
  return function () {
    var result = ''
    var numberString = numberInput.toString()
    var numberSplited = numberString.split('')
    var newNumbers = numberSplited.map(function (number) { return parseInt(number) })
    if (newNumbers.length < 4) {
      for (var i = newNumbers.length; i < 4; i++) {
        newNumbers.unshift(0)
      }
    }
    var elevatedNumbers = [ newNumbers[0] * 1000, newNumbers[1] * 100, newNumbers[2] * 10, newNumbers[3] * 1 ]
    console.log(elevatedNumbers)
    if (elevatedNumbers[0] !== 0) {
      result += ('M'.repeat(elevatedNumbers[0] / 1000))
    }
    if (elevatedNumbers[1] !== 0) {
      if (elevatedNumbers[1] < 300) {
        result += ('C'.repeat(elevatedNumbers[1] / 100))
      } else if (elevatedNumbers[1] < 500) {
        result += ('C'.repeat(5 - (elevatedNumbers[1] / 10)) + 'D')
      } else if (elevatedNumbers[1] === 500) {
        result += ('D')
      } else if (elevatedNumbers[1] < 800) {
        result += ('D' + ('C'.repeat((elevatedNumbers[1] / 100) - 5)))
      } else { result += ('C'.repeat(10 - (elevatedNumbers[1] / 100)) + 'M') }
    }
    if (elevatedNumbers[2] !== 0) {
      if (elevatedNumbers[2] < 30) {
        result += ('X'.repeat(elevatedNumbers[2] / 10))
      } else if (elevatedNumbers[2] < 50) {
        result += ('X'.repeat(5 - (elevatedNumbers[2] / 10)) + 'L')
      } else if (elevatedNumbers[2] === 50) {
        result += ('L')
      } else if (elevatedNumbers[2] < 80) {
        result += ('L' + ('X'.repeat((elevatedNumbers[2] / 10) - 5)))
      } else { result += ('X'.repeat(10 - (elevatedNumbers[2] / 10)) + 'C') }
    }
    if (elevatedNumbers[3] !== 0) {
      if (elevatedNumbers[3] < 3) {
        result += ('I'.repeat(elevatedNumbers[3] / 1))
      } else if (elevatedNumbers[3] < 5) {
        result += ('I'.repeat(5 - (elevatedNumbers[3] / 1)) + 'V')
      } else if (elevatedNumbers[3] === 5) {
        result += ('V')
      } else if (elevatedNumbers[3] < 8) {
        result += ('V' + ('I'.repeat((elevatedNumbers[3] / 1) - 5)))
      } else { result += ('I'.repeat(10 - (elevatedNumbers[3])) + 'X') }
    }
    return result
  }
}
game(1111)()
