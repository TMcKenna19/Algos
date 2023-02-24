//Write a function iFibonacci that behaves like the following:
// rFibonacci(0) = 0                                  => 0
// rFibonacci(1) = 1                                  => 1
// rFibonacci(2) = rFibonacci(0) + rFibonacci(1)      => 1
// rFibonacci(3) = rFibonacci(1) + rFibonacci(2)      => 2
// rFibonacci(4) = rFibonacci(2) + rFibonacci(3)      => 3
// rFibonacci(5) = rFibonacci(3) + rFibonacci(4)      => 5
// rFibonacci(6) = rFibonacci(4) + rFibonacci(5)      => 8

function recursiveFibonacci(num){
    if(num === 1 || num === 2 ){
        return 1;

    }else{
        console.log(recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2));
    }
}
recursiveFibonacci(5);


function fibonacci(num) {
    if (num <= 1) return 1;
  
    fibonacci(num - 1) + fibonacci(num - 2);
  }
fibonacci(6);
 
