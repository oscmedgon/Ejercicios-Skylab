//sum() & multiply()

//Define a function sum() and a function multiply() that sums and multiplies (respectively)
//all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
// multiply([1,2,3,4]) should return 24.
function sum(numbers){
  var base = 0
  for (var i = 0; i < numbers.length; i++) {
    base += numbers[i]
  }
  console.log(base)
}
function multiplication(numbers){
  var base = numbers[0]
  for (var i = 1; i < numbers.length; i++) {
    base *= numbers[i]
  }
  console.log(base)
}
sum([1,2,3,4])
multiplication([1,2,3,4])