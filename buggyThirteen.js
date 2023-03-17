
 //Below are the solutions to the basic 13 algos, some containe errors. Fix bugs so all solutions are working


//(1)
//  function print1To255(){
//     var num = 1; 
//     while (num < 255) {
//         console.log(num); 
//         num = num + 1;
//     }
//  }

function print1To255(){
    var num = 0; 
    while (num < 255) {
       num++;
       console.log(num); 

   };
};

print1To255();

//(2)
// Print ints from 0 to 255 and the sum so far

// function printIntsAndSum0To255(){
//     var sum = 0;
//     for(var num = 0; num <= 255; num++)
//     { sum += num; }
//     return sum;
// }

function printIntsAndSum0To255(){
    var sum = 0; 
    for(var int = 0; int <= 255; int++){
        console.log(int);
        sum = sum + int;
        console.log(sum)
    }
}
printIntsAndSum0To255();