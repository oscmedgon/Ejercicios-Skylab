//maxOfThree() function

//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(p1 , p2 , p3){
	var maxVal= 0;
	if (p1 > p2 && p1 > p3){
		maxVal = p1;
	} else if(p2 > p1 && p2 > p3){
		maxVal = p2;
	} else{
		maxVal = p3;
	}
	console.log("Los números son: "+ p1 + "-" + p2 + "-" + p3 + "\n" + "El mayor de los números es: " + maxVal)
}
maxOfThree(Math.floor(Math.random()*100) , Math.floor(Math.random()*100) , Math.floor(Math.random()*100))