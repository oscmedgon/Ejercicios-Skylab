//Calculator

//Define a function called calculator that receives an operation and two numbers and 
//returns the result of the operation applied to the values passed as parameters

function calculator(number1 , number2 , operator){
  return operator(number1 , number2)
}
function sum(number1 , number2){
  return number1 + number2;
}
function substraction(number1 , number2){
  return number1 - number2;
}
function multiplication(number1 , number2){
  return number1 * number2;
}
function division(number1 , number2){
  return number1 / number2;
}
calculator( 7 , 10 , sum)
calculator( 7 , 10 , substraction)
calculator( 7 , 10 , multiplication)
calculator( 7 , 10 , division)
