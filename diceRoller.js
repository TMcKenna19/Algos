// Create a function that returns a value between 1 through 6

function d6DiceRoller(){
    var roll = Math.floor(Math.random()*6 + 1);
    return roll; 

}
var playerRoll = d6DiceRoller();
console.log("Player Rolled " + playerRoll)



// using Math.ceil //
function d6Dice(){
    var roll = Math.ceil(Math.random()*6);
    if(roll == 0){
        roll = 1;
    }
    return roll;
}
var playerRoll = d6Dice();
console.log("Player Roll is " + playerRoll)