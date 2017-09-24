//-----------------------------callMe menos dificil
var callMe = (function(){
  var timesCalled = 0;
  return function(){
      return ++timesCalled;
    }
})();


callMe()
 
//----------------------------callMe más dificil
  function callMe(){
    var timesCalled = 0
    callMe = function(){
    return ++timesCalled;
  }
  return callMe()
}
callMe()
