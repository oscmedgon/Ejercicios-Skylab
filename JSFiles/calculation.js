//Calculation

//Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function calculation(){
	var values = "";
	var result = 0;
	for (var i = 0; i < 500; i++) {
		if(i % 23 === 0){
			values += i + "\t";
			result += i;
		}
	}
	console.log( "Elements: " + values +"\n" + "Result: " + result)
}
calculation();