//encode--> given a string with repeating consecuctive characters,
// give a number for each number of repeats next to the letter
//example ---> aaabccccdd -> a3b1c3d2
const encode = (str)=>{
    let output = ""
    let count = 1;

    // Loop through the array
    for(let i = 0; i < str.length; i++) {
        // Set the count to compare the letters
        if(str[i] === str[i + 1]) {
            count++
        } else { // if it's not equal the current letter, and the current number is showen in the output
            output += ( `${ str[i] }${ count }`) // Output addes the letter and number is showen so far
            count = 1
        }

    }
    return output

}

console.log(encode("aaabccccdd") )//a3b1c3d2
