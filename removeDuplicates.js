// Remove duplicates
// Given a sorted array of integers, remove all duplicates from the array and return an array that does not contain duplicates (okay to make a new array)

// Ex: given [1,1,1,2,3,3,4] > return [1,2,3,4]
// Ex: given [2,2,3,4,4,4] > return [2,3,4]

// Challenge one: How would you do this with an unsorted array?
// Challenge two: try to do this WITHOUT making a new array! (Also known as in place)

//(1)
//create new empty array 
//create for loop 
//create 2nd for loop to compaire values 
//push single value into  new array 

function removeDup(arr){
    for(var i = 0; i < arr.length; i++){
        let num = arr[i];
        for(j=i+1; j<arr.length; j++){
            if(arr[j] == num){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
console.log(removeDup([1,1,1,2,3,3,4]));