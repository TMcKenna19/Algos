// Balance Point //

// Write a function that returns whether the given array has a balance point BETWEEN indices, where one side’s sum is equal to the other’s. 
// Ex: given [1,1,1,1] > return true, because between indices 1 and 2 the sum on the left and right are equal
// Ex: given [2,1,1] > return true, because between indices 0 and 1 the sum of the left and right are equal
// Ex: given [3,1,1] > return false, because at no point is the left sum equal to the right sum



// Balance Index //

// Here, a balance point is ON an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value).
// Return -1 if none exist.
// Ex: given [1,20,1] > return 1 because the sums of the values on the left and right of index 1 are equal
// Ex: given [1,20,2] > return -1 because the sums of the values on the left and right of index 1 are not equal
// Ex: given [1,2,1,20,4] > return 3
// Ex: given [2,2,9,6,-2] > return 2


//Balance Point
//1. set varabiable for left and right []
//2. iterate left ++ iterate right -- []
//3. add left / add right and compaire value[]

function balancePoint(arr){
    let index = 1;
    
    while(index < arr.length){
        let leftSum = 0;
        let rightSum = 0;
        for(var i = 0; i < index; i ++){
            leftSum += arr[i];
        }
        for(var j = index; j < arr.length; j ++){
            rightSum += arr[j];
        }
        if(leftSum === rightSum){
            return true;
        }
        index ++;
    }
    return false;
}

console.log(balancePoint([1,1,1,3]));


