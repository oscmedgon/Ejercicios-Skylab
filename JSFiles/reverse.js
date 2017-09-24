//reverse()

//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") 
//should return the string "ratset gaj".

function reverse(textToReverse){
  var reversedText = "";
  for (var i = textToReverse.length - 1; i >-1; i--) {
    reversedText += textToReverse[i]
  }
  console.log(reversedText)
}
reverse("jag testar")