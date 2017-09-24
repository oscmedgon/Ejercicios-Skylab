//translate()

//Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate(textToTranslate){
  var textTranslated = "";
  for (var i = 0; i < textToTranslate.length; i++) {
    if("aeiou ".indexOf(textToTranslate[i]) === -1){
    textTranslated += textToTranslate[i] + "o" + textToTranslate[i]
  } else{
    textTranslated += textToTranslate[i]
  }
}
  return textTranslated;
}
translate("this is fun") //

// way 2
