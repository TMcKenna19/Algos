
function countDown(n){
    for(let i = n; i > 0; i--){
        console.log(i)
    }
    console.log('Hooray')
}
countDown(5)


//Recursiive
function countDownRecursive(n){
    if(n <= 0){
        console.log('Hooray')
        return
    }
    console.log(n)
    countDownRecursive(n-1)
}
countDownRecursive(5); 