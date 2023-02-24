// create a fuction to reverse a string "Hello World" --> "dlroW olleH"

// start at last index of the input string
// put the value of the last index into the resulting string 
// decrement the index number by 1 and put the value of that index into the resulting string 



function revString(greeting){
    let result = ""
    for(var i = greeting.length-1; i >=0; i--){
        result += greeting[i];
    }
    console.log(result);
}

revString("Hello");



