//Write a function (recursion) rFactorial that behaves like the following:
// rFactorial(1) = 1                  => 1
// rFactorial(2) = 2 * 1              => 2
// rFactorial(3) = 3 * 2 * 1          => 6
// rFactorial(4) = 4 * 3 * 2 * 1      => 24
// rFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120

function recursiveFactorial(num){ 
    if(num == 1){
        return 1;
    }else{
        console.log("factorial(",num,") = ",num,"* factorial(",(num-1)+")");
        return num * recursiveFactorial(num - 1);
    }
    
}
recursiveFactorial(5);