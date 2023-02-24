// create a function that determinds if an array is a palindrome
// racecar
// tacocat
// looking at an array, can the values in the array be read the same forwards as backwads [1,2,3,3,2,1]

//1. Sentry (var i)
//2. Where does it start? (var i = 0)
//3. Where does it end? (i < 10)
//4. How does it change? 

function isPal(arr) {

    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1,1,2,2,1]);
console.log(result1);