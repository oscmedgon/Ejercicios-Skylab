//Multiplications table on demand

//Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function mathTableOnDemand(p1){
	var table = "";
	for (var i = 1; i <= 10; i++) {
		table += (p1*i) + "\t";
	}
	console.log("La tabla del "+ p1 + "\t" + table)
}
mathTableOnDemand(Math.floor(Math.random()*11))