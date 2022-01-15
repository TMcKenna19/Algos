//Count down lift off 
for(var i = 10; i > 0; i--){
    if(i !==2 ){
        console.log(i)
    }else if (i == 2 ){
        console.log("Ignition on!")
    }
}
console.log("Lift off!")


//count positive numbers 0 not positive 
var countPositives = 0;
var numbers = [3,4,-2,7,16,-8,0]

for(var i = 0; i < numbers.length; i++){
  if(numbers[i] >0){
      countPositives++
  } 
}
console.log(countPositives)


// walk or Uber
var raining = false;
var distanceMiles = 4;

if(raining == true || distanceMiles > 5){
    console.log("Call an Uber")
}else{
    console.log("Let's walk")
}


//count 10 while loop
var num = 0; 

while(num < 10){
    console.log("#",num)
    num++;
}

//write name 
function writeMyName(name){
    console.log("Hello, my name is",name)
}

writeMyName("Tim");


