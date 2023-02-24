//Write a function iFactorial that behaves like the following:
//iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120

function iFactorial(num){
    sum = 1;
    if(num == 0){
        console.log(num, "is the basecase")
    }else{
        for(var i = 1; i <= num; i++){
            sum = sum * i;
            console.log(sum)
        }
    }
}
iFactorial(5);