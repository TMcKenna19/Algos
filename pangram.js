//Is Pangram
// Given a string, return true or false whether or not the string is a pangram
// Pangram: A sentence that contains every letter in the alphabet at least one time
// Ex: The quick brown fox jumps over a lazy dog -> true
// Ex: Sphinx of black quartz, judge my vow -> true
// Ex: Pack my box with five dozen liquor jugs -> true
// Ex: Hello world -> false

const isPangram = str => {
    let lowerString = str.toLowerCase()
    let letterObject = {[lowerString[0]]: 1,}
    let count = 1
    if (lowerString.length < 26) {
        return false
    }
    for (let i = 1; i < lowerString.length; i++) {
        if ("!., ".includes(lowerString[i])) {
            continue;
        }
        if (!letterObject[lowerString[i]]) {
            count++;
            letterObject[lowerString[i]] = 1;
        }
    }
    console.log(letterObject)
    if (count >= 26) {
        return true;
    } else {
        return false;
    }
}