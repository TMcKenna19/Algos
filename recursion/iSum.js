// Go ahead and implement a function iSum that behaves just like rSum but instead of using recursion to implement the solution it uses iteration.

// iSum(1) = 1                  => 1
// iSum(2) = 1 + 2              => 3
// iSum(3) = 1 + 2 + 3          => 6
// iSum(4) = 1 + 2 + 3 + 4      => 10
// iSum(5) = 1 + 2 + 3 + 4 + 5  => 15

function iSum(num){
    sum = 0;
    if(num == 0){
        console.log(num,"is the basecase")
    }else{
        for(var i = 1; i <= num; i++){
            sum = sum + i;
            console.log(sum)    
        }
    }
}
iSum(5);