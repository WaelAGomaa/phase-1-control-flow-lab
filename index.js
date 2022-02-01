function scuberGreetingForFeet(someValue){
if (someValue <= 400) {
  return "This one is on me!";

  } else if (someValue >= 2000){
    return "I will gladly take your thirty bucks.";
  } 
    else if (someValue > 2500){
    return 'No can do.';
  }
}


function ternaryCheckCity(NYC){
   NYC === Pittsburgh ? 'No go.' : `No go.`
  // Write your code here!
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