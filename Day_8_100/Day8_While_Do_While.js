// while(condition){
//     //statement
//     //increment or decrement
// }

// at first while loop check the condition if it is true it runs else it Not

// while(false){
//     console.log("hello")
// }
// while(true){
//     console.log("hello")
//     // it gives unlimited hello because we have not mention any condition or termination to it
// }


// let a = 0

// while(a<=10){
    // console.log(a)
    //this statement also gives unlimited output because firsly statement is true that a is less than 10, for every iteration it will true thats why it will run unlimited times.

    //if we mention increment or decrement there is chance to stop the loop

    // a = a+1; //here we are adding 1 to a, in each iteration value of a will increase until a values will lessthan or equals to 10

    // a = a+2; // adding by 2 until 10

    // a= a-1 //here our code runs unlimited times. because it will be negative number
    // it will be never positive and reach at 10.
// }

//let print the array using while loop
let initial = 0
let moviesGenre = ['action','drama','romantic','comedy']


// while(initial< moviesGenre.length){
//     console.log(moviesGenre[initial]);
//     initial++
// }



// do while loop

// Syntax
// let num = 1
// do {
//     console.log(num);
//     num++
// }
// while(num<=10);
//working mechanism of do while loop

//first do while do the task and then check the condition 

let score = 1
do{
    console.log(10);
}
while(score>=10) // this is not  true statement that's why it run only for one time 