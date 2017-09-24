//filterLongWords()

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words 
//that are longer than i.

function filterLongWords(integrer , words){
  var sWordsLongerThanIntegrer = [];
  var nLengthOfIntegrer = integrer.length;
  for (var i = 0; i < words.length; i++) {
    var nCurrentWordLength = words[i].length
    if (nCurrentWordLength > nLengthOfIntegrer){
      sWordsLongerThanIntegrer.push(words[i])
    }
  }
  return sWordsLongerThanIntegrer
}
filterLongWords("Dale Marico" , ["Preguntale al pato", "patata", "talk to the hand"])