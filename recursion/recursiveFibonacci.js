//Write a function iFibonacci that behaves like the following:
// rFibonacci(0) = 0                                  => 0
// rFibonacci(1) = 1                                  => 1
// rFibonacci(2) = rFibonacci(0) + rFibonacci(1)      => 1
// rFibonacci(3) = rFibonacci(1) + rFibonacci(2)      => 2
// rFibonacci(4) = rFibonacci(2) + rFibonacci(3)      => 3
// rFibonacci(5) = rFibonacci(3) + rFibonacci(4)      => 5
// rFibonacci(6) = rFibonacci(4) + rFibonacci(5)      => 8

function recursiveFibonacci(num){
    if(num == 1 || num == 2 ){
        return 1;

    }else{
        console.log(recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2));
    }
}
recursiveFibonacci(6);

//go back and make sure you understand this algo 