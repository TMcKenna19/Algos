//(1) print 1-255
function print1to255(){
    var num = 1;
    while (num <= 255) {
        console.log(num);
        num = num +1;
    }
}
print1to255();


//(2) Print sum 0-255, and with each interger print the sum so far
function sumTheNums(){
    var sum = 0; 
    for(var num = 0; num < 256; num++){
        sum += num
        console.log("The current number is ->", num, "This is sum of the current number and previous number is ->", sum)
    }
}
sumTheNums();


//(3) Find and print max, print the largest element in a given array
function printMax(arr){
    for(var i = 0; i < arr.length-1; i++){
       maxNum = 0;
       if(arr[i] > maxNum){
           maxNum = arr[i];
           
       }
       
    }
    console.log("Max number is", maxNum)
}
printMax([1,3,6,14,5]);


//(4) Print odds 1 to 255
function printOdds(){
    var odds = 0;
    for(var i = 0; i < 256; i++){
        if(i % 2 == 1){
            odds =+ i;
            console.log(odds)
        }
    }
}
printOdds();


//(5) Iterate and Print Array, Print all values in a given array
function printArray(arr){
    for(var i = 0; i < arr.length; i++){     
        console.log("array[",i,"] is equal to", arr[i]);
    }
}
printArray([1,2,3,4,5]);


//(6) Get and Print Average, analyze an array’s values and print the average
function printArryAvg(arr){
   var arrTotal = arr[0];
   for(var i = 1; i < arr.length; i++){
       arrTotal += arr[i];
    }

    console.log("Average value is", arrTotal / arr.length)
}
printArryAvg([68,97,95,99,92,94]) 


//(7) Array with Odds Create an array with odd integers from 1-255. 
function oddArray(){
   var myOddArr = [];
    for(var i = 0; i < 256; i++){
        if(i % 2 == 1){
            myOddArr.push(i)
        }
    }
    console.log(myOddArr)
}
oddArray();


//(8)
//Greater Than Y, count and print the number of array values less than a given Y. 

function greaterThanY(arr, y){
    nums = 0;
    greaterNums = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            greaterNums.push(arr[i])
            nums++;
        }    
    }
    console.log("There are", nums, "numbers greater than", y, "Numbers ->", greaterNums);
}
greaterThanY([1,2,3,4,6,7,8,9,10], 5);

//(9) 
//Max, Min, Average Given an array, print max, min and average values.

function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];

    for(var i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }

    console.log("min =",min,"max =",max);
    console.log("Average = ", sum / arr.length);
}
minMaxAvg([93,90,97,90]);

//(10)
//Square the Values, Given an array, square each value in the array.

function squareArray(arr){
    var sqrArr = [];

    for(var i=0; i<arr.length; i++){
      sqrArr.push(arr[i] * arr[i]);  
    }
    console.log(sqrArr)
}
squareArray([9,9,9])


//(11)
// Zero Out Negative Numbers, Set negative array values to zero.

function zeroOutNegNums(arr){
    var myArr = [];

    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
            myArr.push(arr[i]);
        }else{
            myArr.push(arr[i]);
        }
    }
    console.log(myArr);
}
zeroOutNegNums([-1,2,3,-5,3,-6,-2,6,-9]);

//(12)
//Shift Array Values, Shift array values: drop the first and leave ​'0'​ at end

function shiftArray(arr){
    for(var i=1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length - 1] = 0;
    console.log(arr)
}
shiftArray([1,2,3,4,5]);

//(13)
//Swap String For Array Negative Values, Replace any negative array values with ​'Hello'​.

function negativeToString(arr){
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Hello";
        }
        console.log(arr[i]);
    }

}
negativeToString([1,2,3,-4,5]);




//==============================//
//   Practice and Basics 
//==============================//



//** Linear Search **
function linearSearch(array,key){
    for(var i = 0; i<array.length; i++){
        if(array[i] == key){
            console.log(key,"is located at location",i)
        }
    }
    
}
linearSearch([1,2,-3,5,12,32,19,-45],5)


function countDown(n){
    for(let i = n; i > 0; i--){
        console.log(i)
    }
    console.log('Hooray')
}
countDown(5)



//** Recursion **
function countDownRecursive(n){
    if(n <= 0){
        console.log('Hooray')
        return
    }
    console.log(n)
    countDownRecursive(n-1)
}
countDownRecursive(3)




//** Swap variables **
function varibaleSwap(){
    
    var fruitOne = "Apple";
    var fruitTwo = "Banana";

    var temp = fruitTwo; //Banana
    fruitTwo = fruitOne; //Apple 
    fruitOne = temp;
    console.log("Fruit One = " + fruitOne + " & " + "Fruit Two = " + fruitTwo);
}
varibaleSwap();
//OutPut
//fruitOne = "Banana" fruitTwo = "Apple"


//** Reversing an array **
// [1,2,3,4,5] --> [5,4,3,2,1]

function revArray(arr){
    for(var left=0; left < arr.length/2; left++){
        var right = arr.length-1-left;
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr
}
var result1 = revArray([1,2,3,4,5]);
    console.log(result1);

 
