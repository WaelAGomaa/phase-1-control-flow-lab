function scuberGreetingForFeet(someValue){
if (someValue <= 400) {
  return "This one is on me!";

  } else if (someValue > 2000 && someValue < 2499) {
    return "I will gladly take your thirty bucks.";
  } 
    else if (someValue > 2500) {
    return "No can do.";
  }
}


function ternaryCheckCity(cityName){
  if (cityName === 'NYC'){ return 'Ok, sounds good.';} else if (cityName === 'Pittsburgh');{ return 'No go.';}
}

  function switchOnCharmFromTip(generous){
    switch(generous){
     case 'generous':
        return 'Thank you so much.'
     case 'not as generous':
          return 'Thank you.'
    default:
            return "Bye."
        
    }
    
}