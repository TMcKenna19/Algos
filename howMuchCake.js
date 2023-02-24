/* As a user, I need to know what the remainder is if I divide out my cake that has 12 pieces to 5 people, because I want to know how much left over I will have. */

/* Feature 1

As the designated cake slicer and distributor at our office birthday parties, I want a function called howMuchLeftOverCake that passes two variables numberOfPieces and numberOfPeople into it and figures out the remainder pieces of cake. */

/* Feature 2

Building off Feature 1 , I want to the console.log() to display "No leftovers for you!" if there aren't any left overs, "You have some left overs" if there are 2 pieces of cake or less, "You have left overs to share" if there are 3 - 5 pieces of cake left over, or "Hold another party!" if there are more than 5 pieces of cake left over. */

function howMuchLeftOverCake(numberOfPeices, numberOfPeople){
    let leftOversPieces = numberOfPeices - numberOfPeople
    console.log(leftOversPieces)
        
    if(leftOversPieces == 0){
        return("No leftovers for you")

    }else if(leftOversPieces <=2){
        return("You have some left overs")

    }else if(leftOversPieces >=3 && leftOversPieces <=5){
        return("You have left overs to share")

    }else if(leftOversPieces >5){
        return("Hold another party")
    }
    
}
   
console.log(howMuchLeftOverCake(12, 5));
