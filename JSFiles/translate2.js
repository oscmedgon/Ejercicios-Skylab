//translate()

//Represent a small bilingual lexicon as a Javascript object in the following fashion
 //{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
 // and use it to translate your Christmas cards from English into Swedish.

var dictionary = {
  "merry":"god",
   "christmas":"jul",
   "and":"och", 
   "happy":"gott", 
   "new":"nytt", 
   "year":"år"
}
function translate(textToTranslete){
  var splited = textToTranslete.split(" ");
  var translatedText = "";
  for (var i = 0; i < splited.length; i++) {
    translatedText += (dictionary[splited[i]] + " ")
  }
  return translatedText.trim()
}
translate("merry chritmas and happy new year")