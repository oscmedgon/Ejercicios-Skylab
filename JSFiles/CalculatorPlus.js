//Calculator Plus

//Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever)
//returns the result of the operation applied to the values passed as parameters
function calculatorPlus(operator){
  var numberOfNumbers = arguments.length
  var numbers =[];
  for (var i = 1; i < arguments.length; i++) {
  	numbers.push(arguments[i])
  }
  return operator.apply(null, numbers)
}
function sum(){
   var sumResult = 0;
  for (var i = 0; i < arguments.length; i++) {
  	sumResult += arguments[i]
  }
  return sumResult
 }
 function substraction(){
  var sumResult = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
  	sumResult -= arguments[i]
  }
  return sumResult
 }
  function multiplication(){
  var sumResult = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
  	sumResult *= arguments[i]
  }
  return sumResult
 }
   function TheDivision(){
  var sumResult = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
  	sumResult /= arguments[i]
  }
  return sumResult
 }
calculatorPlus(TheDivision ,9504,8,4,8,8,9,2,1,7)
