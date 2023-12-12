//basically scope are two types local scope and global scope
//if we initialize variable to the block it is called local scope
//whereas if we declare variable outside the block it called global scope
if(true){
    if(true){
    var a = 10
    }
}
//var 
// console.log(a+10)

function myinfo(){
if(true){
         var val = 5
    }
}
console.log(myinfo());
// if we declare inside the function and try to use outside function it throws undefined
// console.log(val + 5); // it throws error 


//functional scope 
function myFav (){
    let favFood = "desert"

    if(true){
        console.log(favFood);
    }
}
console.log(myFav());

// we can globally initialize variable in function and can use with in function if we use it under block it throw undefined due to it's scope