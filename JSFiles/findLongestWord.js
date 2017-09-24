//findLongestWord()

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(words){
  var aNumberOfWords = words.length;
  var aAllWordsLengths = [];
  for (var i = 0; i < aNumberOfWords; i++) {
    aAllWordsLengths.push(words[i].length)
    console.log(words[i].length)
  }
  console.log (aAllWordsLengths)
  var nTheNumberOne = Math.max(... aAllWordsLengths)
  return nTheNumberOne

}
findLongestWord(["pepe", "periko", "dale mariko",])