function fizzBuzz(){
var list = Array(100).fill(0).map(function(item , index){
  if((index+1) % 3 === 0 && (index +1) % 5 === 0){return "FizzBuzz"}
  if((index+1) % 3 === 0){return "Fizz"}
  if((index+1) % 5 === 0){return "Buzz"}
  if(((index+1).toString()).indexOf('3')  !== -1){return "Fizz"}
  if(((index+1).toString()).indexOf('5')  !== -1){return "Fizz"}
  return index+1
})
return list
}
