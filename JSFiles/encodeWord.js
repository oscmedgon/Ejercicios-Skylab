//encodeWord

//Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:

//7 instead of T
//4 instead of A
//5 instead of S
//0 instead of O
function encodeWord(wordToEncode){
	var codedWord = "";
	for (var i = 0; i < wordToEncode.length; i++) {
		switch (wordToEncode[i].toUpperCase()){
			case "T" :
			codedWord += "7"
			break;
			case "A" :
			codedWord += "4"
			break;
			case "S" :
			codedWord += "5"
			break;
			case "O" :
			codedWord += "0"
			break;
			default:
			codedWord += wordToEncode[i]
		}
	}
	console.log(codedWord)
}
encodeWord("yhasdlkttlkasdmklfasasdlwlñksdpooeosòakks")