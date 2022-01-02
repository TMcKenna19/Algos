// Create a function that accepts an array of numbers. Every time that array has 3 odd values in a row print "Thats odd!" Every time the array has 3 even values in a row , print "Even more so!"

//1. create a function (that accepts an array) [x]
//2. create some variables [x]
//3. create a loop [x]
//3b. detemine if odd or no [x]
//4. count odds and evens [x]
//5. if not 3 odds or 3 evens in a row reset counters []
//6. if i find three odds or three evens in a row then print statement []
//7. reset counters []

function oddsEvens(arr){
    var odds = 0;
    var evens = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            evens++
            odds = 0
            console.log(arr[i])
        }else {
            odds++
            evens = 0
        }
        if(odds == 3){
            console.log("thats odd!")
            odds = 0
        } else if(evens == 3){
            console.log("even more so")
            evens = 0;

        }
        
        
    }
}

var myArr = [3,3,3,4,4,4,5,6]
oddsEvens(myArr)