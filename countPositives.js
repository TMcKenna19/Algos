// count the positive numbers in given array 

var posNums = 0;
var nums = [2,-1,7,-3,12,17,-6];

for(var i=0; i<nums.length; i++){
    if(nums[i] > 0){
        posNums++;
    }
}
console.log("There are " + posNums + " positive numbers");
