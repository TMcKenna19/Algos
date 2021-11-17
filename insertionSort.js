function insertionsort(arr){
    for(var i=1; i<arr.length ;i++) {
        var x=i;
        while(arr[x-1]>arr[x]) {
            var temp = arr[x-1];
            arr[x-1] = arr[x];
            arr[x] = temp;
            x -= 1;
            console.log(arr);
        }
    }
    return arr;
}
console.log(insertionsort([3,2,1,3,7,34,1]));