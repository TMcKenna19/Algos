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
    myOddArr = [];
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

