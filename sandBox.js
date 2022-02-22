let myName = "Tim"
let age = 35 
var hobby = "Running"
const faveFood = "Sushi"
var pets = ["Rocky", "Kona"]

myName = "Rocky"
age = 30                  // let will allow age to be 30
hobby = "cycling"
// faveFood = "Ramen"        // will not allow faveFood to be "Ramen" faveFood is defined as a const 
pets = ["Ykcor", "Anok"]     // var will allow pets to be ["Ykcor", "Anok"] 
console.log("Name: ",myName)
console.log("Age: ",age)
console.log("Hobby: ",hobby)
console.log("Favorite Food: ",faveFood)
console.log("Pets: ",pets)



const sayHello = name => console.log(`Hello, ${name}`)

sayHello("Tim")



let accountBalance = 100;
function canAfford(itemPrice){
    if(itemPrice > accountBalance){
        return `Put it back! you need $${itemPrice - accountBalance} more `
    }else {
        return "Treat yo self" 
    }
}
console.log(canAfford(200));



function smallArr(arr){
    let min = arr[0];
    for (let element of arr){
        if(element < min){
            min = element;
        }
    }
    return min; 
}
console.log(smallArr([45,34,23,56,2,57]))


class Car{
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;

    }
    drive(){
        this.miles += 10;
    }
}
const timsCar = new Car("Toyota", "Corolla", "White");
timsCar.drive();
timsCar.drive();
console.log(timsCar.miles);