//given a string that can be a sentence, put each word into an array
let sentence = "Hi everybody, welcome to week two"

const stringToWordArr = (input)=>{
    var arr=[];
    var word = "";
    for(var i=0; i<input.length; i++) {
        if(input[i] == " ") {
            arr.push(word.replace(/[, ]+/g, " ").trim());
            word="";
        }
        else word +=input[i];
    }
    if(word!="") arr.push(word);
    console.log(arr);
}

stringToWordArr(sentence) //["Hi", "everybody," , "welcome", "to", "week", "two"]
