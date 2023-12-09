//loops -> iteration 
//loop is the sequence of repetitive which will not finish until condition doesn't match.

// there are several loops in programming language but we mostly use for,while, do while and for each loop in js 

// syntax for for loop

//for(initialization condition increment/decrement){code}


// basic program example of for loop 
let  num =10;
for (let i = 1; i <=num; i++) {
    const element = i;
    // console.log(element);
    
}
//working mechanism of for loop 
// while starting the loop at first we initialize value and give condition then loop enter in the block code and check either it is iterating or not 

//program to print the multiplication of program to 5 
let multiplyValue = 5
for (let i = 1; i<=multiplyValue; i++) {
    for (let j = 1; j <=10; j++) {
    //    console.log(`${i} *${j} = ${i*j}`);
    } 
}

