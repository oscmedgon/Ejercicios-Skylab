//Multiplications table

//Write a function that writes in the console the multiplication table (from 1 to 10)
var table = "";
function mathTable(){
	for (var i = 1; i <=10; i++) {        //filas
		for (var f = 1; f <=10; f++) {    //columnas
			table += ( i * f ) + "\t"
		}
		table += "\n"
	}
	console.log(table);
}
mathTable();