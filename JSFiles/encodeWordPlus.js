//encodeWordPlus

//Improve the previous function to add a random number between 0 and 1000 every 7 characters
function generateRandomNumber(){
	var random = Math.floor(Math.random()*1001)
	return random;
}

function encodeWord(wordToEncode){
	var codedWord = "";
	for (var i = 0; i < wordToEncode.length; i++) {
		if (i % 7 === 0) {
			codedWord += generateRandomNumber()
		}
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
encodeWord("sakñdmnjsdhiqwioytptpwqoiwrueytytefhjaslkdfasfñgkajghashgdzvxczxnccamsmas")