var peopleWithAgeDrink = function(age){
  switch( true ){
    case (age < 14): 
    return 'drink toddy'
    break;
    
    case (age < 18): 
    return 'drink coke'
    break;
    case (age < 21): 
    return 'drink beer'
    break;
    default: 
    return 'drink whisky'
    break;
  }
};