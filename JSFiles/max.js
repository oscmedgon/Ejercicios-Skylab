//max() function

//Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.

function max(p1 , p2){
	var maxVal= 0;
	if (p1 > p2){
		maxVal = p1;
	} else{
		maxVal = p2;
	}
	console.log("Los números son: "+ p1 + "-" + p2 + "\n" + "El mayor de los números es: " + maxVal)
}
max(Math.floor(Math.random()*100) , Math.floor(Math.random()*100))