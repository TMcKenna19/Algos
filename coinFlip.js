// Create a function that will flip a coin and give the output, heads or tails 

function coinFlip(){
    userFlip = [];
    let coin = Math.random();
    if(coin <.5){
        coin = "Heads"
    }else{
        coin = "Tails"
    }
    userFlip = coin;
    return userFlip;
}

console.log(coinFlip());


