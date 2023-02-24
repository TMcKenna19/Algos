// create a function that will give random answer to question asked 
function magicEightBall(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var shake = lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)];
    return shake;
}
var answer = magicEightBall();
console.log(answer);