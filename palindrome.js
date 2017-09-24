
function palindrome(str) {
  var original = str.toLowerCase().replace(/[^a-z0-9]/g , '');
  var reverse = str.toLowerCase().replace(/[^a-z0-9]/g , '').split('').reverse().join('');
  console.log(reverse)
  if (original === reverse){
    return true;
  } else {
    return false;
  }
}


palindrome("_eye");