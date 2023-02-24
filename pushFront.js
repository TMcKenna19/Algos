/*
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

For example, pushFront([5, 93, 22, 4], 100) should return [100, 5, 93, 22, 4].
 */


function pushFront(myArr, num){
   for(i = myArr.length-1; i >=0; i--){
       myArr[i + 1] = myArr[i];
   }
   myArr[0] = num
} 

console.log(pushFront([5, 93, 22, 4],100));


