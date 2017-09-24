//Hexadecimal

//Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". 
//Give the function //the name getRGB() and test it with this code

//Hint: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split

//>>> var a = getRGB ('#00FF00');
//>>> a;
//“rgb(0,255,0)”;
function getRGB(hexColor){
  var redHex = hexColor.substring(1,3);
  var greenHex = hexColor.substring(3,5)
  var blueHex = hexColor.substring(5,7)

  var redDec = parseInt(redHex , 16)
  var greenDec = parseInt(greenHex , 16)
  var blueDec = parseInt(blueHex , 16)

  return "rgb(" + redDec + "," + greenDec + "," + blueDec + ")"

}
getRGB("#003fff")