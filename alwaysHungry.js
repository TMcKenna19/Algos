//create a function that accepts an array
//print "yummy" each time one of the values is equal to "food"
//if no array values are "food" then print "i'm hungry" one time

//example: [1,4,"food", "hello", "cheese", "food"]
//output:
//yummy
//yummy

function alwaysHugry( arr ) {
    let yummyCount = 0;
    for( var i = 0; i < arr.length; i++ ){
        if( arr[i] === "food" ){
            console.log("Yummy")
            yummyCount++
        }
    };
    if( yummyCount === 0 ){
        console.log("I'm hungry")
    }
};

alwaysHugry( [1,4,"food", "hello", "cheese", "foo"] );